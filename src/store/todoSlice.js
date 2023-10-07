import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                complete: false
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoComplete: (state, action) => {
            state.todos.map(todo => {
                if (todo.id !== action.payload.id) return todo
                todo.complete = !todo.complete
            })

        },
    },
})

// Action creators are generated for each case reducer function
export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions

export default todoSlice.reducer