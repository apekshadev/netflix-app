import React, { useEffect } from 'react'
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from '../api/movieTypes'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies, addTopRatedMovies, addUpComingMovies } from '../redux/slices/movieSlice'

const useMovieList = () => {
    const popular = useSelector((state:any)=>state.movie.popularMovies);
    const topRated = useSelector((state:any)=>state.movie.topRatedMovies);
    const upComing = useSelector((state:any)=>state.movie.upComingMovies);
    
    const dispatch = useDispatch();
    const fetchMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        const topRatedMovies = await getTopRatedMovies();
        const upComingMovies = await getUpComingMovies();
        dispatch(addPopularMovies(popularMovies));
        dispatch(addTopRatedMovies(topRatedMovies));
        dispatch(addUpComingMovies(upComingMovies));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
  
    useEffect(() => {
      if (!popular.length || !topRated.length || !upComing.length) {
        // Check if movies are already in the state
        fetchMovies();
      }
    }, [dispatch, popular, topRated, upComing]);
    return {
        popular,
        topRated,
        upComing,
      };
}

export default useMovieList;