import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './studentSlice'

export const store = configureStore({
    reducer:{
            data:studentReducer
            }
})

