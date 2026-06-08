import { useState } from "react";
import React from "react";
const App=()=>{
  const [num, setNum] = useState(0);
  function increment(){
    setNum(num + 1);
  }
  function decrement(){
    setNum(num - 1);
  }
  function reset(){
    setNum(0);
  }
  return(
  <div>
    {/* <h1>useState</h1> */}
    {/* <h1>Value of num is {num}</h1> */}
    {/* <button onClick={() => setNum(num + 1)}>Click me</button> */}
    <h1>counter {num}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
  </div>
  )
}
export default App