import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    "Read a book",
    "Go to gym",
    "find a job",
  ]);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <h1>Plan-For-Next-Month</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button>Delete</button>
            <button>👆</button>
            <button>👇</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
export default ToDoList;
