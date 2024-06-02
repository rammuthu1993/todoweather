import React from 'react'

export const EditTodo = (edit,input,addTask) => {
  return (
    <div>
     <input type="text" value={edit.text} onChange={input} />
    <button onClick={addTask}>Add</button>
    
    </div>
  )
}
