import React, { useState } from 'react';
import Modal from '../Modal'
import { CiEdit } from "react-icons/ci";
import { IoMdSave } from "react-icons/io";
import { FaDeleteLeft } from "react-icons/fa6";
import { GrCompliance } from "react-icons/gr";
import { FcUndo } from "react-icons/fc";

import './index.css';

const TaskItem = ({ task, deleteTask, editTask }) => {
  
  const [editText, setEditText] = useState(task); // State to manage edited text
  const [completed, setCompleted] = useState(false); // State to manage task completion
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to handle task deletion
  const handleDelete = () => {
    deleteTask(task);
  };

  // Function to handle task editing
  const handleEdit = () => {
    if (editText.trim()) {
      editTask(task, editText);
      setIsModalOpen(false); // Close modal after editing
    }
  };

  // Function to toggle task completion
  const toggleComplete = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <span style={{ textDecoration: completed ? 'line-through' : 'none', backgroundColor: completed ? ' #a1f990' : 'transparent' }}>
        {task}
      </span>
      {/* Button to open edit modal */}
      <button className="edit-btn" onClick={() => setIsModalOpen(true)}>
        <CiEdit />
      </button>
      {/* Button to delete task */}
      <button className="delete-btn" onClick={handleDelete}>
        <FaDeleteLeft />
      </button>
      {/* Button to mark task as completed */}
      <button className="complete-btn" onClick={toggleComplete}>
        {completed ? <FcUndo /> : <GrCompliance />}
      </button>
      {/* Modal for editing task */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Edit Task</h2>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleEdit}>
          <IoMdSave />
        </button>
      </Modal>
    </div>
  );
};

export default TaskItem;
