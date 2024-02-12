import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

interface TrailerProps {
    id?: string;
    iso_639_1?: string;
    iso_3166_1?: string;
    key?: string;
    name?: string;
    official?: boolean;
    published_at?: string;
    site?: string;
    size?: number;
    type?: string
}
export const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        trailer:{},
        popularMovies:{},
        topRatedMovies:{},
        upComingMovies:{},
        movieKey:" ",
        searchMovies:{},
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailer:(state,action: PayloadAction<TrailerProps>)=>{
            state.trailer= action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComingMovies:(state, action)=>{
            state.upComingMovies = action.payload;
        },
        addMovieKey:(state, action)=>{
            state.movieKey = action.payload;
        },
        addSearchMovies:(state, action)=>{
            state.searchMovies = action.payload;
        }

    }

})
export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpComingMovies, addMovieKey, addSearchMovies}= movieSlice.actions;
export default movieSlice.reducer