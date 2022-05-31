import React from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/main/TodoList';
import Filters from './components/Filters';

function App() {
  return (
    <div className="App">
      
      <TodoList />
      
    </div>
  );
}

export default App;