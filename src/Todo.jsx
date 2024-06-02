import React from 'react'

export const Todo = ({task,deleteTodo,editTodo}) => {
  console.log(task);
  return (
    <div>
      
        <p>{task.task}</p>
        <div>
           <button onClick={()=>editTodo(task.id)}>Edit</button>
           <button onClick={()=>deleteTodo(task.id)}>Delete</button> 
        </div>
    </div>
  )
}
