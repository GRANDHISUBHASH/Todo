import React from 'react';
import TaskItem from '../TaskItem.js';
import './index.css'


const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {/* Render each task item */}
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
