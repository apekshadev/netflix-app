import axios from "axios"
import { API_OPTIONS, SEARCH_URL } from "../constants"

const getSearchMovies =async(query:string) =>{
    const res = await axios(SEARCH_URL.replace("{searchVal}",encodeURIComponent(query)), API_OPTIONS);
    return res.data.results

}
export default getSearchMovies;