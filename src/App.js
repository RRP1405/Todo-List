import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Delete task by id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle completed
  const toggleTaskDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Task Manager</h2>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTaskDone={toggleTaskDone}
      />
    </div>
  );
}

export default App;