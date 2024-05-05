import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
  const[value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

    setValue('')
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <h1> To-Do List</h1>
      <input type="text" className='todo-input' value={value} placeholder='Enter a Task' onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
