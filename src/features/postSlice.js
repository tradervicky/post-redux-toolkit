import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
    {id:'1', title: "Learning Redux Toolkit", content : "I have heard good Things.", date: sub(new Date(), {minutes:10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
},
    
    {id:'1', title: "Learning React JS", content : "I have heard  , it is faster.",
    date: sub(new Date(), {minutes:5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
},

]
const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers: {
        postAdded : 
       { reducer(state, action){
            state.push(action.payload)
        },
        prepare(title, content, userId){
            return {
                payload : {
                    id: nanoid(),
                    title,
                    content,
                    date : new Date().toISOString(),
                    userId,
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }
        }
    }

    
    }
})

export const selectAllPosts = (state)=> state.post;
export const { postAdded } = postSlice.actions
export default postSlice.reducer