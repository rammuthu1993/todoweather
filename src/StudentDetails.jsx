import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider} from './App'
import { getAllDetails,getDetailById,update,changeEdit, deleteDetail } from './studentSlice'
import { useSelector,useDispatch } from 'react-redux'
import { EditDetail } from './EditDetail'
import { useNavigate } from 'react-router-dom'

/* import { useTable,usePagination } from 'react-table'
import { table } from 'table' */

export const StudentDetails = () => {
  
 const navigate = useNavigate()
 const [cond,setCond] = useState(false) 
 console.log(cond);
 const [id,setId] = useState()
 const [editable,setEditable] = useState()
  const stu_data = useSelector(getAllDetails)
  console.log(stu_data);
  const dispatch = useDispatch()
  /* const{initialState,setInitialstate} = useContext(ContextProvider) */
  

 /*  const {
 getTableProbs,
 getTableBodyProbs,   
 headerGroups,
 page,
 rows,
 prepareRow,
  }=useTable(usePagination)
 */
  const handleEdit =(id)=>{
 /*  dispatch(changeEdit({id:id})) */
 const temp = stu_data.find(v=> v.id===id)
  setEditable(temp)
  console.log(editable);
 navigate(`edit/${id}`)
 }  
 
  const [currentPage,setCurrentPage] = useState(1)
  const recordsPerPage = 5;
  const lastIndex = currentPage*recordsPerPage
  const firstIndex = lastIndex-recordsPerPage
  const records = stu_data.slice(firstIndex,lastIndex)
  const npage = Math.ceil(stu_data.length / recordsPerPage)
  const numbers = [...Array(npage+1).keys()].slice(1)

 const handleDelete=(id)=>{
       if(cond){
      del(id)
      function del(id){ dispatch(deleteDetail({id:id}))}
       }
    
} 

/* const handleUpdate=(id)=>{
  const nupdate = initialState.find(data => data.id === id )
  nupdate.name = name
  nupdate.email = email
  nupdate.mobile = mobile
  nupdate.age = age
  nupdate.faceshape = faceshape
  nupdate.std = std
  nupdate.address = address
  setInitialstate(initialState.map(v=> v.id===id ? {...v,isEditing:!v.isEditing}:v))
} */

const prevPage=()=>{
if(currentPage!==firstIndex){
  setCurrentPage(currentPage-1)
}
}

const nextPage =()=>{
  if(currentPage!==firstIndex){
    setCurrentPage(currentPage+1)
}
}
const changeCPage=(id)=>{
  setCurrentPage(id)
}
  return (
    <>

        <div className='modal' id='delete'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header bg-primary'>
                  <h4 className='modal-title '>Delete detail...</h4>
                  <button type='button' className='btn btn-close' data-bs-dismiss='modal'></button>
                </div>
             <div className='modal-body'>
              <p>Are you sure want to delete?..</p>
              <div><button type='button' data-bs-dismiss='modal' onClick={()=>dispatch(deleteDetail({id:id}))}>Yes</button >&nbsp;<button type='button' data-bs-dismiss='modal'>No</button></div>
              </div>       

              </div>

            </div>
        </div>

    <div class='p-3'><span>StudentDetails</span>
        <span class='px-2'><Link to='/form'>Student Form</Link></span>
        <span class='float-end px-2'><Link to='/'>Logout</Link></span></div>
        <div class='container-fluid'>
          <div class='row'>
            <div class='col-md-2'>
              <div class='accordian'>
               <div class='card'>
                <div className='card-header'>
                  <h4> Core React Js</h4>
                  <a href="#lead" class='btn' data-bs-toggle='collapse'>Lead</a>
                </div>
                <div id='lead' className='collapse' data-bs-parent='#accordian'>
                  <div className='card-body'>
                    <Link to='/form'>Add Lead</Link>
                  </div>
                </div>
                </div> 
               
                
              </div>
              </div> 
            
              <div class='col-md-9 border-1' >
                  
                <table class='table table-bordered col-md-12 text-center'>
                  <thead>
                    <tr>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Age</th>
                    <th>Face Shape</th>
                    <th>Class</th>
                    <th>Address</th>
                    <th colSpan={2}>Update</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                  
                     
                    {records.map(detail=> 
                    (         
                           
                    
                       <tr key={detail.id} >
                       <td>{detail.name}</td>
                       <td>{detail.email}</td>
                       <td>{detail.mobile}</td>
                       <td>{detail.age}</td>
                       <td>{detail.faceshape}</td>
                       <td>{detail.std}</td>
                       <td>{detail.address}</td>
                       <td><button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#mymodal' onClick={()=>handleEdit(detail.id)}>Edit</button></td>
                       <td><button type='button' data-bs-toggle='modal' data-bs-target='#delete' onClick={()=>setId(detail.id)}>Delete</button></td>
                     </tr> 
                    ))}
                   
                  </tbody>
                </table>
                
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'><a href="#" className='page-link' onClick={prevPage}>prev</a></li>
                    {
                        numbers.map((n,i)=>(
                            <li className={`page-item ${currentPage===n ? 'active' :""}`} key={i}><a href="#" className='page-link' onClick={()=>changeCPage(n)}>{n}</a></li>
                        ))
                    }
                     <li className='page-item'><a href="#" className='page-link' onClick={nextPage}>next</a></li>
                    </ul>
                </nav>
               
              </div>
          </div>
        </div>
      
       <EditDetail handleDelete={handleDelete} editable={editable}/>       

    </>
  )
}


