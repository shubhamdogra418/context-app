import React, {useContext} from "react";
import { CartContext } from "../Context/CartContext"; 

const Cart = () => {
    const cart=useContext(CartContext);

    const total= cart.items.reduce((a,b) => a + b.price, 0);
    return ( 
        <div className="cart"> 
            <h1> Cart</h1>
            {  cart && cart.items.map((item) => (
                    <li className="items-added"> 
                        {item.name} -${item.price}
                    </li>
                ))  
            }
            <h4 className="total-bill"> Total bill is: $ :{total} </h4>
        </div>
    )
}

export default Cart;