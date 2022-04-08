import React, { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const [show, setShowlist] = useState(false);

  const handleChange = (event) => {
    setItem(event.target.value);
  };
  const addValue = () => {
    setList([...list, item]);
    setItem("");
    console.log(list)
  };
  const dispalyList = () => {
    setShowlist(!show);
  };
  const handleDelete = (item) => {
    setList(
      list.filter((elem) => {
        return elem !== item;
      })
    );
  };

  return (
    <div className="App">
      <div className="App-header">
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={addValue}>Add Item</button>
        <button onClick={dispalyList}>Show/Hide List</button>
        {show ? (
          <ul>
            {list.map((item, index) => {
              return <li key={index} onClick={() => handleDelete(item)}>
                  {item}
                </li>
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default App;
