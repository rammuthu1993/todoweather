import React, { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

export const Login = () => {

    const [userdetails,setUserDetails] = useState([{
          name:'Muthukumar',
          pword:'123456'
    }])

    let names = userdetails.map(user=> user.name)
    let passwords = userdetails.map(user=> user.pword)
    console.log(passwords);
    const [name,setName] = useState("")
    const [pword,setPword] = useState("")
    const [error,setError] =useState("")
    const navigate = useNavigate()

    const handleLogin=(e)=>{
      e.preventDefault()
      console.log(names.includes(name)&&passwords.includes(pword));
        if(names.includes(name)&&passwords.includes(pword)){
            navigate('/students')
        }
        else{
            setError("Details Not Match...")
        }
    }
    
  return (
    <div>
        
        
        <form action="" onSubmit={handleLogin} className='d-flex flex-column align-items-center'>
        <h1>Login</h1>
        <p>{error}</p>
           <div>
           <label htmlFor="">User Name: </label> <br />
           <input type="text" placeholder='User Name' value={name} onChange={(e)=>setName(e.target.value)}/>
          
           </div>
           <div>
           <label htmlFor="">Password:</label> <br />
           <input type="text" placeholder='Password' value={pword} onChange={(e)=>setPword(e.target.value)}/>
           
           </div>
           <br />
           <button type='submit'>Login</button>
        </form>
    </div>
  )
}
