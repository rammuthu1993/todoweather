import React, { useState } from "react";
import { Header } from "./Header";
import { Routes,Route } from "react-router-dom";
import { Login } from "./Login";
import { StudentDetails } from "./StudentDetails";
import { StudentForm } from "./StudentForm";
import { createContext } from "react";
import { EditDetail } from "./EditDetail";

export const ContextProvider = createContext()


function App() {
    const [initialState,setInitialstate] = useState([])
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [mobile,setMobile] = useState("")
    const [age,setAge] = useState("")
    const [faceshape,setFaceshape] = useState("")
    const [std,setStd] = useState("")
    const [address,setAddress] = useState("")

   
  return (
    <main>
      
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path='/login' element={<Login/>}/>
        
        <Route path='/students' element={<StudentDetails/>}>
        <Route path='edit/:id' element={<EditDetail/>} />
        </Route>
        <Route path='/form' element = {<StudentForm/>}/>
      </Routes>
    
    </main>
  );
}


export default App;