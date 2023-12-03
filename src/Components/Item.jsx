import React, {useContext} from "react";
import { CartContext } from "../Context/CartContext";
const Item = (props) => {
    const cart=useContext(CartContext);
    // console.log(cart); 
    return ( 
        <div className="item-card"> 
            <h3> {props.name} </h3>
            <h4> Price is ${props.price} </h4>
            <button className="btn" onClick={()=> 
                cart.setItems([...cart.items, 
                    {name: props.name, price: props.price },
                    ])}> Add to Cart</button>
        </div>
    )
}

export default Item;