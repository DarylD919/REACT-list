import React from 'react';

export default function Form({ setInput, setTodos, todos, input, setStatus }) {
    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: input, completed: false, id: Math.random() * 100}]);
        setInput('');
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <div>
            <form>
                <input value={input} onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
            </form>
        </div>
    )
}
