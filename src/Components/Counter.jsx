import React, {useContext} from "react";
import { CounterContext} from "../Context/Counter";

const Counter= () => {
    const counterHere= useContext(CounterContext);
    return (
        <div> 
            <button onClick={() => counterHere.setCount(counterHere.count+1)}> Increment</button>
            <button onClick={() => counterHere.setCount(counterHere.count-1)}> Decrement</button>
        </div>
    )
}

export default Counter;