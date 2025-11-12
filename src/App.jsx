import { useState } from "react";
import "./App.css";
import initialState from "./data";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList";
import ToDo from "./ToDo";

function ToDoContainer() {
  const [todos, setToDos] = useState([]);
  // const [todo, setToDo] = useState({});

  function addToDo(todo) {
    if (todo !== "") {
      setToDos([
        ...todos,
        { id: uuidv4(), title: todo, complete: false, isEditing: false },
      ]);
    }
  }
  // console.log(todos);

  function deleteToDo(id) {
    setToDos(todos.filter((todo) => todo.id !== id));
    console.log(`deleting task... - ${id}`);
  }

  function handleEdit(id) {
    setToDos(todos.map((todo) => todo.id === id){
      ...todo, isEditing: !todo.isEditing
    })
    console.log("start editing...");
  }

  return (
    <div className="container">
      <h1>To Do List</h1>
      <br />
      <ToDoList addToDo={addToDo} />
      {todos.map((todo, id) => (
        <ToDo
          task={todo}
          key={id}
          deleteToDo={() => deleteToDo(todo.id)}
          handleEdit={handleEdit}
        />
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
