import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    { text: "Keep learning React", completed: false },
    { text: "Go to gym", completed: false },
    { text: "Find a job", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonth = new Date().getMonth();

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function handleCompletedTask(index) {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function capitalizeFirstWord(text) {
    const words = text.split(" ");
    if (words.length > 0) {
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    }
    return words.join(" ");
  }

  return (
    <div className="mt-5">
      <h1>
        Next-Month-To-Do-List{" "}
        <span className="fs-5 ms-3">({months[currentMonth]})</span>
      </h1>

      <ul style={{ listStyleType: "none" }} className="mt-5">
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onClick={() => handleCompletedTask(index)}
              className="me-3 mb-4"
            />
            <span
              className="me-3 fw-bold fs-3"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {capitalizeFirstWord(task.text)}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-danger my-1 py-0"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-center mt-4">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask} className="btn btn-primary fw-bold">
          Add
        </button>
      </div>
    </div>
  );
}
export default ToDoList;
