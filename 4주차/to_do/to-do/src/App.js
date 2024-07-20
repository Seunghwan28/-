import React from 'react';
import AddTodo from './components/AddToDo.jsx';
import ToDoList from './components/ToDoList.jsx';

const App = () => {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodo />
      <ToDoList />
    </div>
  );
};

export default App;
