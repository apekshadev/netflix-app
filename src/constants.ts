export const userIcon ='https://occ-0-3999-58.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e'
export const NOW_PLAYING_URL ='https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const MOVIE_TRAILER ='https://api.themoviedb.org/3/movie/{id}/videos?language=en-US';
export const POPULAR_MOVIES ='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UPCOMING ='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
export const IMG_CDN ='https://image.tmdb.org/t/p/w300';
export const SEARCH_URL ='https://api.themoviedb.org/3/search/movie?query={searchVal}&include_adult=false&language=en-US&page=1'
export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_API_TOKEN
    }
} 
export const openAIKey=process.env.REACT_APP_OPENAI_KEY;
