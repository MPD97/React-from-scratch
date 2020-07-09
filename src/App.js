import React, { useState } from 'react';
import './App.css';


import './Styles/button.css';
import './Styles/input.css';
import './Styles/todo.css';
import './Styles/todoList.css';


import TodoList from './Components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}

export default App;
