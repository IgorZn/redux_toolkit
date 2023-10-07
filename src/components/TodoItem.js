import React from 'react';

// Redux and Slices
import {useDispatch, useSelector} from 'react-redux'
import {removeTodo, toggleTodoComplete} from '../store/todoSlice'


const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    const deleteTask = (id) => {
        dispatch(removeTodo({id}))
    }

    const completeTask = (id) => {
        dispatch(toggleTodoComplete({id}))
    }

    return (
        <li>
            <input type="checkbox" checked={todo.complete} onChange={() => completeTask(todo.id)}/>
            <span>{todo.text}</span>
            <span className="delete" onClick={() => deleteTask(todo.id)}>&times;</span>
        </li>
    );
};

export default TodoItem;
