import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { useStateValue } from "../contexts/CartContext";

function CartPage() {
      const [{ cartitem }, dispatch] = useStateValue();
      const [quantity, setQuantity] = useState(1);
      const {auth}= useContext(AuthContext);
      const navigate = useNavigate()

      const handlequan = ()=>{
        if(!auth){
            console.log("ho jaa")
            return  navigate("/login",{replace:false})
        }
        else{
            setQuantity(quantity+1)
        }
      }
      const deleteing = (item) => {
        if(!auth){
            return navigate("/login",{replace:false})
        }
        if(quantity==1){
            dispatch({ type: "REMOVE", payload: item });
        }
        else{
            setQuantity(quantity-1)
        }
      };
      return (
            <Itemdiv>
                  {cartitem.map((item) => {
                        return (
                              <Productdiv key={item.image}>
                                    <img src={item.image} alt="imag-pic" />
                                    <p key={1}>{item.product_name}</p>
                                    <p key={2}>{item.price}</p>
                                    <button onClick={handlequan}>+</button>
                                    {quantity}
                                    <button
                                          onClick={() =>
                                                deleteing(item.image)
                                          }
                                    >
                                          -
                                    </button>
                              </Productdiv>
                        );
                  })}
            </Itemdiv>
      );
}

const Itemdiv = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 400px);
      grid-template-rows: auto;
      gap: 20px;
      justify-content: center;
      text-align: center;
      align-items: center;
      place-content: center;
`;
const Productdiv = styled.div`
      text-align: center;
      margin: 5px;

      img {
            display: block;
            width: 100%;
      }
`;

export default CartPage;
