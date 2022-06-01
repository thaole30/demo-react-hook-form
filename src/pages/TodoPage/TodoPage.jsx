import React from 'react'
import TodoForm from '../../components/TodoList/TodoForm/TodoForm'
import TodoList from '../../components/TodoList/TodoList'

const TodoPage = () => {

    const handleSubmit = (values) => {
        console.log("form submit", values);
    }

  return (
    <div>
        <TodoList/>
        <TodoForm onSubmit={handleSubmit}/>
    </div>
  )
}

export default TodoPage