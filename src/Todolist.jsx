import { useState,useRef } from "react";
import './Todo.css'
import { EditTodo } from "./EditTodo";

function Todolist(){
  const d = new Date()
  const date = d.toDateString()
  console.log(date);
  const [task,setTask] = useState([])
  const [newtask,setNewtask] = useState("")
  const [todos,setTodos] = useState(true)
  const done = useRef(null)
  const [edit,setEdit] = useState(false)

  function handleInput(e){
    setNewtask([e.target.value])
  }

  function addTask(){
    setTask([...task,{id:task.length+1,text:newtask,checked:false,isEdit:false}])
    console.log(task);
  }

  function handleRemove(i) {
    const upDatedtask = task.filter((_,index) =>  index!==i)
    setTask(upDatedtask)
  }

  function strike(i){
    console.log(i);
    const newtask = [...task]
    newtask[i].checked=!newtask[i].checked
    console.log(newtask[i].checked);
    setTask(newtask)
   /*  console.log(todo);
    if(todo==false){
    done.current.style.textDecoration = "line-through"
    }
    else{
    done.current.style.textDecoration = "none"
    } */
  }
  
   

  
    return (<>
    <h2>Todolist</h2>
    <div>
     <input type="text" onChange={handleInput} />
    <button onClick={addTask}>Add</button>
    <div>
  
     {task.map((todo,i)=>(
        <p key={todo.id} style={{textDecoration: task[i].checked ? "line-through" : "none"}}><span style={{color:'blue'}}>{date}</span>&nbsp;&nbsp;<b>{todo.text}</b>&nbsp;<input type="checkbox" checked={task[i].checked}
        onChange={()=>strike(i)}/>&nbsp; <button onClick={()=>handleRemove(i)}>Remove</button></p>
       
     ))}
    
    </div>
    </div>
        
    
    </>)
}

export default Todolist