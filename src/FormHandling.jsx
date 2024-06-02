import React, { useState } from 'react'
import './FormHandling.css'


function FormTable({user,setUser}){
   
    return(
    <>
    <table><tr><th>Fname:</th><td>{user.fname}</td></tr>
    <tr><th>Lname:</th><td>{user.lname}</td></tr>
    <tr><th>Age:</th><td>{user.age}</td></tr>
    <tr><th>Gender:</th><td>{user.gender}</td></tr>
    <tr><th>is Married:</th><td>{user.isMarried ? "Married" : "Not Married"}</td></tr>
    </table>
   
   </>    
    )
}


export default function FormHandling() {
    const [user,setUser] = useState({
        fname:"Muthu",
        lname:"kumar",
        age:21,
        isMarried:true,
        gender:"Female",
        checked:true
    })

    const handleForm=(e)=>{
         const name = e.target.name
         console.log(name);
         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value 
         setUser({...user,[name]:value})

    }

  return (
    <div className='table'>
       <h1>Form Handling</h1> <br/>
      <FormTable user={user} setUser={setUser}/>
      <br /> <br />
      <form action="" style={{backgroundColor:'yellow'}}>
               
       <div>
       <label htmlFor="fname">First Name:</label> <br />
       <input type="text" name='fname' value={user.fname} onChange={handleForm} id='fname'/>
       </div>
                           <br />
       <div>
       <label htmlFor="lname">Last Name:</label> <br />
       <input type="text" name='lname' value={user.lname} onChange={handleForm} id='fname'/>
       </div>
                              <br />
       <div>
       <label htmlFor="age">Age:</label> <br />
       <input type="text" name='age' onChange={handleForm} value={user.age} id='fname'/>
       </div>
                               <br />
       <div>
       <label htmlFor="gender">Gender:</label> <br />
       <div>
      <label htmlFor="male">
       <input type="radio"  name='gender' onChange={handleForm} checked={user.gender=="Male"}  value='Male'  id='male'/>
       Male:
       </label>
       <label htmlFor="female">
       <input type="radio" name='gender' onChange={handleForm} checked={user.gender=="Female"} 
       value='Female' id='female'/>
       Female
       </label>
       </div>
       </div>
                                <br />
       <div>
       <label htmlFor="married">Is Married:</label>
       <input type="checkbox" name='isMarried' onChange={handleForm} checked={user.isMarried} id='marrried'/>
       </div>
      </form>
    </div>
  )
}
