import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { nanoid } from 'nanoid'
import { Todo } from './Todo'
import {EditTodoForm} from './EditTodoForm'

export const TodoWrapper = () => {
    const [todos,setTodos]= useState([])
    

    const addTodo=(todo)=>{
       setTodos([...todos,{id:nanoid(),task:todo,completed:false,isEditing:false}])
       console.log(todos);
    }
    const deleteTodo=(id)=>{
      setTodos(todos.filter(todo=> todo.id!==id ))
    }
    const editTodo=(id)=>{
      setTodos(todos.map(todo=> todo.id===id ? {...todos,isEditing:!todo.isEditing}:todo))
    }
    const editTask=(task,id)=>{
      setTodos(todos.map(todo=> todo.id===id ? {...todos,task,isEditing:!todo.isEditing}:todo))
    }
  return (
    <div>
         <TodoForm addTodo={addTodo}/>
         {todos.map((todo,index)=> 
         todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo}/>) : (
          <Todo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
          ))}
         
    </div>
  )
}
