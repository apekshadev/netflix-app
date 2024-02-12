import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import movieReducer from './slices/movieSlice'
import tvShowReducer from './slices/tvShowSlice'
import gptSearchReducer from './slices/gptSlice'
import languageReducer from "./slices/languageSlice";


export const store = configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        tvShow:tvShowReducer,
        gptSearch:gptSearchReducer,
        language:languageReducer,
    },
})