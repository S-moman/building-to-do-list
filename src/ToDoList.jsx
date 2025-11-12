import { useState } from "react";


export default function ToDoList({  addToDo }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  function onSubmit(e) {
    e.preventDefault();
    addToDo(input);
    setInput("");
  }
  return (
    <>
      <form onSubmit={onSubmit} className="toDo-form">
        <input
          onChange={handleChange}
          type="text"
          placeholder="To Do?"
          value={input}
        />
        <button>Add</button>
      </form>
    </>
  );
}