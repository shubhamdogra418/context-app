import { useContext } from 'react';
import './App.css';
import Counter from './Components/Counter';
import { CounterContext } from './Context/Counter';

function App() {
  const counterState= useContext(CounterContext)
  console.log("context", counterState);
  return (
    <div className="App">
      <h1> count is {counterState.count} </h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
