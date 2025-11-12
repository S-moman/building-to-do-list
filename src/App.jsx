import { useState } from "react";
import "./App.css";
import initialState from "./data";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";
import ToDo from './ToDo'


function ToDoContainer() {
  const [todos, setToDos] = useState(initialState);
  const [todo, setToDo] = useState("");

  function addToDo(todo) {
    setToDos([
      ...todos,
      { id: uuidv4(), title: todo, complete: false, isEditing: false },
    ]);
    console.log(todos);
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <br />
      <ToDoList addToDo={addToDo} />
      {todos.map((todo, index) => (
        <ToDo task={todo} key={index} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <ToDoContainer />
    </div>
  );
}

export default App;
