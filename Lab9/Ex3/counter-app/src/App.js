import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>

      <h1>Simple Counter</h1>

      <h2>{count}</h2>

      <button onClick={increase}>Increment</button>

      <button onClick={decrease} style={{marginLeft:"10px"}}>
        Decrement
      </button>

    </div>
  );
}

export default App;