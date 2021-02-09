import React from 'react'
import Todo from './Todo';

export default function TodoList({ todos, setTodos, filteredTodos }) {
    return (
    <div className="todo-container">
      <ul className="todo-list">
         {filteredTodos.map((todo) => (
           <Todo 
              key={todo.id}
              todos={todos} 
              text={todo.text}
              todo={todo}
              setTodos={setTodos} 
            />
         ))}
      </ul>
    </div>

    )
}
