import { configureStore } from "@reduxjs/toolkit";
import postReducer from '../features/postSlice'
import usersReducer from '../features/users/userSlice'
export const store = configureStore({
    reducer :{
        post : postReducer,
        users : usersReducer
    }
})