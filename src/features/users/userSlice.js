import { createSlice } from "@reduxjs/toolkit"

const initialState =[
    {id :'0', name:"Vicky"},
    {id :'1', name:"Sandeep"},
    {id :'2', name:"Rishu"},
    
]

const useSlice = createSlice({
    name : 'users',
    initialState,
    reducers: {

    }
})
export const selectAllUsers = (state)=> state.users

export default useSlice.reducer