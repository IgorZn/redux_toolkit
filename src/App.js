import {useState} from "react";
import './App.css';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    complete: false
                }
            ])
        }
        setText('')

    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const toggleTodoComplete = (id) => {
      setTodos(todos.map(todo => {
          if(todo.id !== id) return todo
          return {
              ...todo,
              complete: !todo.complete
          }
      }))
    }

    return (
        <div className="App">
            <InputField text={text} handleInput={setText} handleSubmit={addTodo}/>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodoComplete={toggleTodoComplete}
            />
        </div>
    );
}

export default App;
