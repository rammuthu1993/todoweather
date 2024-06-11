import React from 'react'

export const EditDetails = ({detail}) => {
  return (
    <div>
         
                      <td><input type="text" value={detail.name} onChange={(e)=>setName(e.target.value)}/></td>
                      <td><input type="text" value={detail.email} onChange={(e)=>setEmail(e.target.value)}/></td>
                      <td><input type="text" value={detail.mobile} onChange={(e)=>setMobile(e.target.value)}/></td>
                      <td><input type="text" value={detail.age} onChange={(e)=>setAge(e.target.value)}/></td>
                      <td><input type="text" value={detail.faceshape} onChange={(e)=>setFaceshape(e.target.value)} /></td>
                      <td><input type="text" value={detail.std} onChange={(e)=>setStd(e.target.value)}/></td>
                      <td><input type="text" value={detail.address} onChange={(e)=>setAddress(e.target.value)}/></td>
                      <td><button onClick={()=>handleUpdate(detail.id)}>Update</button></td>
                      <td><button onClick={()=>handleDelete(detail.id)}>Delete</button></td>
                    
    </div>
  )
}

