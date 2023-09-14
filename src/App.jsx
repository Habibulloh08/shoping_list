import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import { message } from "antd";

function App() {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("low");
  const [list, setList] = useState([]);
  const addItem = () => {
    if (input.length > 0 && select) {
      setList([
        ...list,
        { id: Date.now(), title: input, requisite: select, isDone: false },
      ]);
      message.success("Product qo'shildi");
    } else {
      message.warning("Avval product qo'shing");
    }
    setInput("");
  };
  const chekItem = (aydi) => {
    let newList = list.map((item) => {
      return item.id === aydi ? { ...item, isDone: !item.isDone } : item;
    });
    setList(newList);
  };

  const removeText = (title) => {
    const updatedList = list.filter((item) => item.title !== title);
    setList(updatedList);
  };
  console.log(list);

  return (
    <div className="app">
      <div className="card-item">
        <h2>Shopping list</h2>
        <div className="card-contnet">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Item title"
          />
          <select
            name=""
            id=""
            value={select}
            onChange={(e) => setSelect(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="hight">High</option>
            <option value="normal">Normal</option>
          </select>
          <button onClick={() => addItem()}>Add</button>
        </div>
        {list.map((item) => (
          <Card
            key={item.title}
            id={item.id}
            title={item.title}
            pri={item.requisite}
            removeText={removeText}
            chekItem={chekItem}
            isDone={item.isDone}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
