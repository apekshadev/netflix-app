import { createSlice,PayloadAction } from "@reduxjs/toolkit";


export const tvShowSlice = createSlice({
    name:"tvShow",
    initialState:{
        airingToday:{},
        trailer:{},
        popularTvShow:{},
        topRatedTvShow:{},
        upComingTvShow:{},
    },
    reducers:{
        addAiringToday:(state, action)=>{
            state.airingToday = action.payload;
        },
        addTrailer:(state,action)=>{
            state.trailer= action.payload;
        },
        addPopularTvShow:(state, action)=>{
            state.popularTvShow = action.payload;
        },
        addTopRatedTvShow:(state, action)=>{
            state.topRatedTvShow = action.payload;
        },
        addUpComingTvShow:(state, action)=>{
            state.upComingTvShow = action.payload;
        },

    }

})
export const {addAiringToday, addTrailer, addPopularTvShow, addTopRatedTvShow, addUpComingTvShow}= tvShowSlice.actions;
export default tvShowSlice.reducer