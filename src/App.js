import { useContext } from 'react';
import './App.css';
import Item from './Components/Item';
import Cart from './Components/Cart';
// import Counter from './Components/Counter';
// import { CounterContext } from './Context/Counter';

function App() {
  // const counterState= useContext(CounterContext)
  // console.log("context", counterState);
  return (
    <div className="App">
        <Item name="Iphone15" price={120000}/>
        <Item name="MacBook Pro" price={220000} /> 
        <Item name="OnePlus TV" price={90000} />
        <Item name="Speakers" price={70000} />

        <Cart/>

      {/* <h1> count is {counterState.count} </h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/> */}
    </div>
  );
}

export default App;
