import React from 'react'

const TodoForm = () => {
  return (
    <form classname='TodoForm'>
      <input type="text" className='todo-input' placeholder='task'/>
      <button type="submit" className='todo-btn'></button>
    </form>
  )
}

export default TodoForm
