import { createContext, useContext, useReducer } from "react";



export const CartContext = createContext();

export const CartProviderWrapper = ({children,reducer,state})=>{

    return <CartContext.Provider value={useReducer(reducer,state)}>{children}</CartContext.Provider>
}


export const useStateValue = ()=> useContext(CartContext);