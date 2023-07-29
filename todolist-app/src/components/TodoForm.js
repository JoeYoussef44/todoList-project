import React, { useState } from 'react';
import './TodoForm.css'; // Import the TodoForm styles

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [timeToComplete, setTimeToComplete] = useState('');
  const [importance, setImportance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation checks for task, description, timeToComplete, and importance
    if (task.trim() === '' || description.trim() === '' || timeToComplete.trim() === '' || importance.trim() === '') return;
    // If any of these fields are empty, the function returns early.

    //Task Object
    const newTask = {
      id: Date.now(),
      text: task,
      description: description,
      timeToComplete: timeToComplete,
      importance: importance,
      completed: false,
    };

    // Creating a Task Object
    addTask(newTask);
    setTask('');
    setDescription('');
    setTimeToComplete('');
    setImportance('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <div className="input-group">
        <input
          type="text"
          value={timeToComplete}
          onChange={(e) => setTimeToComplete(e.target.value)}
          placeholder="Time to Complete"
        />
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
        >
          <option value="">Select Importance</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
