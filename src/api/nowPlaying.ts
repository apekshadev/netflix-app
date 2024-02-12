import axios from "axios"
import { API_OPTIONS, MOVIE_TRAILER, NOW_PLAYING_URL } from "../constants"

export const getNowPlaying = async()=>{
    const res = await axios(NOW_PLAYING_URL, API_OPTIONS);
    return res.data.results;
}
export const getMovieTrailer= async(id:any)=>{
    const res = await axios(MOVIE_TRAILER.replace("{id}",id ), API_OPTIONS);
   return res.data.results;


}
