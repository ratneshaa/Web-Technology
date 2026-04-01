import React, { useState } from "react";

function App() {

  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {

    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(),
      text: input
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={{width:"300px", margin:"auto", marginTop:"50px"}}>

      <h2>Item List</h2>

      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addItem} style={{marginLeft:"5px"}}>
        Add
      </button>

      <ul>

        {items.length === 0 && <p>No items in the list</p>}

        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => removeItem(item.id)}
              style={{marginLeft:"10px"}}
            >
              Remove
            </button>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;