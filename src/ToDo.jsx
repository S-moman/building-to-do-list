import { useState } from "react";

export default function ToDo({ task }) {
  const [todo, setToDo] = useState({ task });

  function handleEdit(task, id) {
    console.log("start editing...");
  }

  function deleteToDo(id) {
    console.log("deleting task...");
  }

  return (
    <div className="toDoItem">
      <input type="checkbox" name="" id="task-checkbox" />
      <p>{task.title}</p>
      <button onClick={handleEdit}>Edit</button>{" "}
      <button onClick={deleteToDo}>Delete</button>
    </div>
  );
}