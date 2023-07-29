import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ task, completed, toggleTask, deleteTask }) => {
  return (
    <div className={`todo-item ${completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(task.id)}
        />
        <div className="task-details">
          <table>
            <tbody>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Time to Complete</th>
                <th>Importance</th>
              </tr>
              <tr>
                <td>{task.text}</td>
                <td>{task.description}</td>
                <td>{task.timeToComplete}</td>
                <td>{task.importance}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </label>
      <button className="delete-button" onClick={() => deleteTask(task.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoItem;
