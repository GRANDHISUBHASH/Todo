import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput.js';

import TaskList from './components/TaskList.js';
import './App.css';

const App = () => {
  // State to manage tasks
  const [tasks, setTasks] = useState(() => {
    // Retrieve tasks from local storage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Effect to update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Function to delete a task
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter(task => task !== taskToDelete));
  };

  // Function to edit a task
  const editTask = (oldTask, newTask) => {
    setTasks(tasks.map(task => (task === oldTask ? newTask : task)));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
    </div>
  );
};

export default App;
