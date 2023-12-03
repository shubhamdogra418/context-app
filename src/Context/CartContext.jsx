import { createContext, useContext, useState } from "react";

export const CartContext= createContext(null);

//making cutomHok useCart() to import directly
export const useCart =()=> { //will use it in other imports
    const cart=useContext(CartContext);
    return cart;
}

export const CartProvider =(props) => {
    const [items, setItems]= useState([]);
    return (
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
} 