import React from 'react'
import styled from 'styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../contexts/CartContext';

function Navbar() {
    const [{cartitem}] = useStateValue();
  return (
    <div>
        <NavBox>
            <Heading>
                <p>Navbar</p>
                <Link style={{"color":"white","margin":"0 10px"}} to={"/"}>Home</Link>
                <Link style={{"color":"white","margin":"0 10px"}} to={"/login"}>Login</Link>
            </Heading>
            <div>
                <Link style={{"color":"white","margin":"0 10px"}} to={"/cart"}>
                <Cart>
                    <ShoppingCartIcon />{cartitem.length}
                </Cart>
                </Link>
            </div>
        </NavBox>
    </div>
  )
}

const NavBox = styled.div`
    display: flex;
    height: 30px;
    background-color: #77b3e4;
    color: white;
    justify-content: space-between;
    font-size: 20px;
    text-align: center;
    padding: 5px;
`;

const Cart = styled.p`
margin: 0 10px;
margin-top: -25px;
`

const Heading = styled.div`
display: flex;
text-align: center;
margin-top: 0px !important;
justify-content: space-evenly;

 p{
    padding-left: 30px;
 }
`;

export default Navbar