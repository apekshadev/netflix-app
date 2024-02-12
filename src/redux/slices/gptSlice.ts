import { createSlice } from "@reduxjs/toolkit";

export const gptSlice= createSlice({
    name:"gptSearch",
    initialState:{
        showGptSearch:false,
    },
    reducers:{
        toggleGptView:(state, action)=>{
            state.showGptSearch = !state.showGptSearch;
        },


    }
})
export const {toggleGptView}= gptSlice.actions;
export default gptSlice.reducer;