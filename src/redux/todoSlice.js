import {createSlice} from "@reduxjs/toolkit";

const initialState={
    items:[]
}
const todosSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodos(state, action){
            state.items.push(action.payload)
            // console.log("action.payload = ",action.payload)
        },

        deleteTodos(state, action){},
        editTodos(state, action){},
    }
})

export const {addTodos, deleteTodos, editTodos} = todosSlice.actions
export const todosReducer = todosSlice.reducer

