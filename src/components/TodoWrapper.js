import React , {useState} from 'react'
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo  from './Todo'

uuidv4();

const TodoWrapper = () => {
    const[todos, setTodos] = useState([])

    const addTodos = (todo) => {
      setTodos([...todos,{id: uuidv4(), task: todo, completed: false, isEditing: false}])
      console.log(todos)
    }

    const toggleComplete = id =>{
      setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    // filter all of the todos that are not equal to the id (basically deleting the selected todo)
    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodos}/>
      {todos.map((todo, index)=>(
        <Todo task={todo} key={index}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default TodoWrapper ;