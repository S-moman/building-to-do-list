import { useState } from "react";
import "./App.css";

function ListItem() {
  return (
    <>
      <li></li>
      <button>Edit</button> <button>Delete</button>
    </>
  );
}

function ToDoList() {
  return (
    <>
     <form action="">
      <input type="text" /><button>Add</button>
      <div><ListItem /></div>
     </form>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>ToDo List</header>
      <ToDoList />
    </div>
  );
}

export default App;
