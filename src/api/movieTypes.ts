import axios from "axios"
import { API_OPTIONS, POPULAR_MOVIES, TOP_RATED, UPCOMING } from "../constants"

export const getPopularMovies = async()=>{
    const res = await axios(POPULAR_MOVIES,API_OPTIONS);
    return res.data.results;
}

export const getTopRatedMovies = async()=>{
    const res = await axios(TOP_RATED,API_OPTIONS);
    return res.data.results;
}
export const getUpComingMovies = async()=>{
    const res = await axios(UPCOMING,API_OPTIONS);
    return res.data.results;
}
