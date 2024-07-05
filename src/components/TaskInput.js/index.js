import React, { useState } from 'react';
import './index.css'


const TaskInput = ({ addTask }) => {
  // Local state to manage input value
  const [task, setTask] = useState('');

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask(''); // Clear input after adding task
    }
  };

  return (
    <div className="task-input">
      {/* Input field for task */}
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
      />
      {/* Button to add task */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
