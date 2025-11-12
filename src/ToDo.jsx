import { useState } from "react";

export default function ToDo({ task, deleteToDo }) {
  const [todo, setToDo] = useState({ task });

  function handleEdit(task, id) {
    console.log("start editing...");
  }

 

  return (
    <div className="toDoItem">
      <input type="checkbox" name="" id="task-checkbox" />
      <p>{task.title}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => deleteToDo(todo.id)}>Delete</button>
    </div>
  );
}