import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/AppStyles.css'; // Import the styles

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  // Array of tasks retrieved from the local storage

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  // Storing the updated version of Tasks on page reloads and application shutdown


  // =========   Managing Task State  ==========
  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]); // create an array containing the previous tasks and the newly added one
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // ==================================================

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
