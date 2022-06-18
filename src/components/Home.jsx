import React, {  useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../contexts/CartContext";

function Home() {
      const [page, setPage] = useState(1);
      const [products, setProducts] = useState([]);
      useEffect(() => {
            fetch(`http://localhost:8080/products?_limit=6&_page=${page}`)
                  .then((data) => data.json())
                  .then((data) => setProducts(data));
      }, [page]);
      
      const [{cart},dispatch] = useStateValue();

      const addToBasket = (id,title,image,price)=>{
        dispatch({
          type : 'ADD_TO_BASKET',
          payload : {
            id : id,
            product_name : title,
            image : image,
            price : price,
          },
        })
      }
      return (
            <ItemBox>
                  {products.map((item) => {
                        return (
                              <Productdiv key={item.image}>
                                    <img src={item.image} alt="imag-pic" />
                                    <p key={1}>{item.product_name}</p>
                                    <p key={2}>{item.price}</p>
                                    <button
                                          onClick={()=> addToBasket(item.id,item.product_name,item.image,item.price)}
                                          style={{
                                                padding: "5px",
                                                margin: "5px",
                                          }}
                                    >
                                          ADD TO CART
                                    </button>
                              </Productdiv>
                        );
                  })}
                  <p key={3} style={{"marginLeft":"300px"}}>
                    <span>
                        {page !== 1 && (
                              <button style={{"fontSize": "18px"}} onClick={() => setPage(page - 1)}>
                                    Prev
                              </button>
                        )}
                        {page != Math.ceil(35 / 6) && (
                              <button style={{"fontSize": "18px"}} onClick={() => setPage(page + 1)}>
                                    Next
                              </button>
                        )}
                        </span>
                  </p>
            </ItemBox>
      );
}

const ItemBox = styled.div`
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

export default Home;
