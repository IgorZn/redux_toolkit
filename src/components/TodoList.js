import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = ({todos, removeTodo, toggleTodoComplete}) => {
    return (
        <div>
            <ul>
                {
                    todos.map(todo => <TodoItem
                        todo={todo}
                        removeTodo={removeTodo}
                        toggleTodoComplete={toggleTodoComplete}
                    />)
                }
            </ul>
        </div>
    );
};

export default TodoList;
