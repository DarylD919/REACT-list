import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus ] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  },[]);


  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };


  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));

  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null ) {
      localStorage.setItem('todos', JSON.stringify([]));
    }else{
      let todolocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todolocal);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Daryl's To Do List</h1> 
      </header>
      <Form  
        input={input} 
        todos={todos} 
        setTodos={setTodos} 
        setInput={setInput}
        setStatus={setStatus}
      />

      <TodoList 
        setTodos={setTodos} 
        todos={todos}
        filteredTodos={filteredTodos}
        /> 
    </div>
  );
}

export default App;
