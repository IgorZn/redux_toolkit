import React from 'react';

const TodoItem = ({todo,removeTodo, toggleTodoComplete}) => {
    return (
        <div>
            <li key={todo.id}>
                <input type="checkbox" checked={todo.complete} onChange={() => toggleTodoComplete(todo.id)}/>
                <span>{todo.text}</span>
                <span className="delete" onClick={() => removeTodo(todo.id)}>&times;</span>
            </li>
        </div>
    );
};

export default TodoItem;
