import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux'

const initialState={
    data:[]
}
export const studentSlice = createSlice( {
    name:'data',
    initialState,
    reducers:{
        detailAdded:{
            reducer(state,action){
            state.data.push(action.payload)
        },
        prepare(name,email,mobile,age,faceshape,std,address){
            return {
            payload:{
             id:nanoid(),
             name,
             email,
             mobile,
             age,
             faceshape,
             std,
             address,
             isEditing:false
            }}
         }
    },
    changeEdit:{
          reducer(state,action){
            const {id} = action.payload
           const change = state.data.find(v=> v.id===id)
           change.isEditing = !change.isEditing
          }
    },
    update:{
        reducer(state,action){
           const {id,name,email,mobile,age,faceshape,std,address} = action.payload
           const udetail = state.data.find(v=> v.id===id)
           udetail.name = name
           udetail.email = email
           udetail.mobile = mobile
           udetail.age = age
           udetail.faceshape = faceshape
           udetail.std = std
           udetail.adddress = address 
        }
    },
    deleteDetail:{
           reducer(state,action){
              const {id} = action.payload
             state.data = state.data.filter(v=> v.id !== id)    
           }
    }
       
}
 
})

export const {detailAdded,update,changeEdit,deleteDetail} = studentSlice.actions
export const getAllDetails = state=> state.data.data;
export const getDetailById=(state,id)=> state.data.data.find(v=> v.id===id)

export default studentSlice.reducer


