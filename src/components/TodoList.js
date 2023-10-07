import React from 'react';
import TodoItem from "./TodoItem";

// Redux and Slices
import {useSelector} from 'react-redux'

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)

    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)
            }
        </ul>
    );
};

export default TodoList;
