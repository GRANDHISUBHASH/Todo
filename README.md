# React To-Do Application

A simple and interactive To-Do application built with ReactJS. This application allows users to add, view, edit, complete, and delete tasks. The tasks are stored in the browser's local storage, ensuring they persist even after a page reload.

## Features

- **Add Task:** Users can input a task and add it to the list.
- **View Tasks:** Displays all added tasks in a list format.
- **Edit Task:** Each task can be edited via a modal popup.
- **Delete Task:** Users can delete tasks from the list.
- **Complete Task:** Mark tasks as completed with a line-through style.
- **Local Storage:** Tasks are saved in local storage to persist data.

## Screenshots

![Todo App Screenshot](C:\Users\dell\Desktop\TodoApplication\todo\public\Todo-app-SS.png)

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/react-todo-app.git
    ```
2. **Navigate to the project directory:**
    ```bash
    cd todo
    ```
3. **Install the dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Start the development server:**
    ```bash
    npm start
    ```
2. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Project Structure

- `src/`: Contains all the source code for the React application.
  - `components/`: Contains the React components.
    - `TaskInput.js`: Component for adding a new task.
    - `TaskItem.js`: Component for displaying and managing individual tasks.
    - `Modal.js`: Reusable modal component for editing tasks.
  - `index.js`: Entry point for the React application.
  - `App.js`: Main application component.
- `public/`: Contains the public assets and HTML file.

## CSS Styling

- **Responsive Design:** The application is designed to be responsive and works well on all devices.
- **Modal Styling:** Attractive modal with smooth transitions and a clean layout.
