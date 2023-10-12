import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'


import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState([])
  const addtodo = (inputtodo) => {
    setTodo((pertodo) => [inputtodo, ...pertodo]);
    console.log(todo)
  }
  const handleRemove = (id) => {
    setTodo(() => todo.filter((item) => item.id != id))
  }
  const handleCompleted = (id) => {
    setTodo((prev) => 
      todo.map(item => item.id === id ? { ...item,completed: true } : item)
   )

    //const newar = todo.map(todo => todo.id === id ? { ...todo,completed: true } : todo);
    console.log("todoaftercomplete", todo)
  }
  return (
    <>
      <TodoForm addtodo={ addtodo} />
      <TodoList todos={todo} handleRemove={ handleRemove} handleCompleted={handleCompleted} />
    </>
  )
}

export default App
