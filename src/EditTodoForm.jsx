import React,{useState} from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const [value,setValue] = useState(task[0].task)
    
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(value);
      editTodo(value,task.id)
     setValue("")
    }
  return (
    <form  onSubmit={handleSubmit}>
    <input type="text" value={value} placeholder='update task' onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit'>update task</button>
    </form>
  )
}
