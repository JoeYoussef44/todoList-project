import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'; // Import the TodoList styles

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          completed={task.completed}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
