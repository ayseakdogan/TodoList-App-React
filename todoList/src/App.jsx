import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }
  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }
  const updateTodo = (newTodo) => {
    const newTodos = todos.map((todo) => {
      if (newTodo.id !== todo.id)
        return todo;
      else
        return newTodo;
    })
    setTodos([...newTodos]);
  }
  console.log(todos)
  return (
    <div className='App'>
      <div className='todos'>
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
    </div >
  )
}

export default App
