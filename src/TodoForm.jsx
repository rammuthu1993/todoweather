import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(value);
      addTodo(value)
     setValue("")
    }
  return (
    <form  onSubmit={handleSubmit}>
    <input type="text" value={value} placeholder='What is the Task today' onChange={(e)=>setValue(e.target.value)}/>
    <button type='submit'>Add</button>
    </form>
  )
}
