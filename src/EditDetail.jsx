import React,{useState,useRef} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getDetailById,update } from './studentSlice'

export const EditDetail = ({editable}) => {
    const {id} = useParams()
    const edit = useSelector(state=>getDetailById(state,id))
    console.log(editable && editable?.name);
  
  
  const [uname,setUname] = useState()
  const [uemail,setUemail] = useState()
  const [umobile,setUmobile] = useState()
  const [uage,setUage] = useState()
  const [ufaceshape,setUfaceshape] = useState()
  const [ustd,setUstd] = useState()
  const [uaddress,setUaddress] = useState()

const handleUpdate=(id)=>{
    dispatch(update({id:id,name:uname,email:uemail,mobile:umobile,age:uage,faceshape:ufaceshape,std:ustd,address:uaddress}))
}  
  return (
    <div>
     <div className='modal fade' id='mymodal'>
                      <div className='modal-dialog modal-xl'>
                       <div className='modal-content'>
           
                         <div className='modal-header'>
                         <h4 className='modal-title'>Edit Detail</h4>
                         <button type='button' className='btn-close' data-bs-dismiss='modal'></button>
                         </div>
           
                         <div className='body'>
                          <table className='table table-bordered col-md-12 text-center'>
                          <thead>
                    <tr>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Age</th>
                    <th>Face Shape</th>
                    <th>Class</th>
                    <th>Address</th>
                    <th>Update</th>
                    
                    </tr>
                  </thead>
                         <tr>
                             
                             <td><input className='col-md-12' value={uname} type="text" onChange={(e)=>setUname(e.target.value)}/></td>
                              <td><input className='col-md-12' value={uemail} type="text"  onChange={(e)=>setUemail(e.target.value)}/></td>
                              <td><input className='col-md-12' value={umobile} type="number" onChange={(e)=>setUmobile(e.target.value)}/></td>
                              <td><input className='col-md-12' value={uage} type="number" onChange={(e)=>setUage(e.target.value)}/></td>
                              <td><input className='col-md-12' value={ufaceshape} type="text" onChange={(e)=>setUfaceshape(e.target.value)} /></td>
                              <td><input className='col-md-12' value={ustd} type="text" onChange={(e)=>setUstd(e.target.value)}/></td>
                              <td><input className='col-md-12' value={uaddress} type="text" onChange={(e)=>setUaddress(e.target.value)}/></td>
                              <td><button onClick={()=>handleUpdate(id)}>Update</button></td>
                             
                      
                            </tr>
                            </table>
                         </div>
                        <div className='modal-footer'>
                          <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>Close</button>
                        </div>
                       </div>
                       </div>   
                   </div>       

    </div>
  )
}
