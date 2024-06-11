import React, {useState } from 'react'
import { ContextProvider } from './App'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { detailAdded } from './studentSlice'

export const StudentForm = () => {
    const dispatch = useDispatch()
    
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [age,setAge] = useState("")
    const [faceshape,setFaceshape] = useState("")
    const [std,setStd] = useState("")
    const [address,setAddress] = useState("")


    /*  const{initialState,setInitialstate,name,setName,email,setEmail,mobile,setMobile,age,setAge,faceshape,setFaceshape,std,setStd,address,setAddress} = useContext(ContextProvider)
console.log(initialState);  */
     const navigate = useNavigate()
   

   /*  console.log(email);
    const AddDetails=(name,email,mobile,age,faceshape,std,address)=>{
       
        
        return {
            id:nanoid(),
            name:name,
            email:email,
            mobile:mobile,
            age:age,
            faceshape:faceshape,
            std:std,
            address:address,
            isEditing:false
        
    }} */

  // const d1 = AddDetails(name,email,mobile,age,faceshape,std,address)

    function handleSubmit(e){
        e.preventDefault()
        dispatch(detailAdded(name,email,mobile,age,faceshape,std,address))
        navigate('/students')
    }

  return (
    <div class='d-flex justify-content-center border-1'>
      
       <form action="" class='col-md-6 border-1 d-flex flex-column' onSubmit={handleSubmit}>
       <h1 class=''> Student details form:</h1>
        <label htmlFor="name" >Name: <br /><input class='col-md-10 p-2
        ' type="text" value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} required/></label> <br />
        <label htmlFor="email">Email: <br /> <input class='col-md-10 p-2'  type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/></label> <br />
        <label htmlFor="mobile numbber">Mobile Number: <br /> <input class='col-md-10 p-2'  type="number"  value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='Mobile Number'/></label> <br />
        <label htmlFor="age">Age: <br /> <input class='col-md-10 p-2'  type="number" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}/></label> <br />
        <label htmlFor="face shape">Face Shape: <br /> <input class='col-md-10 p-2' onChange={(e)=>setFaceshape(e.target.value)} value={faceshape}  type="text" placeholder='Face shape'/></label> <br />
        <label htmlFor="class">Class: <br /> <input class='col-md-10 p-2' onChange={(e)=>setStd(e.target.value)}  type="text" value={std} placeholder='Class'/></label> <br />
        <label htmlFor="address">Address: <br /> <input class='col-md-10 p-2' onChange={(e)=>setAddress(e.target.value)} value={address} type="address" placeholder='Address'/></label> <br />
        <button type='submit' class='col-md-10 p-2 bg-primary border-0'>Submit</button>
    </form>
    </div>
  )
}