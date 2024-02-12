import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { stat } from 'fs';
import MovieList from '../../components/MovieList';
import MovieCard from '../../components/MovieCard';

const Search = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('q');
  const searchMovies = useSelector((state: any) => state?.movie.searchMovies);
  const filteredMovies = Array.isArray(searchMovies) ? searchMovies.filter((movie) => movie.poster_path !== null) : [];
  useEffect(() => {
    console.log('Search query:', searchQuery, searchMovies);
  }, [searchQuery]);
  return (
    <div className='bg-black pt-24 overflow-hidden'>
      {

        !filteredMovies.length ? <div className='w-screen h-screen text-center'><h3 className='text-white text-3xl my-12'>Movie Not Found...</h3> </div>: <div className='grid grid-cols-2 sm:grid-cols-5  md:grid-cols-8 gap-4 p-12'>
          {filteredMovies?.map((movie: any, i: any) => {
            return (<MovieCard movie={movie} key={movie.id} />)
          })}

        </div>
      }


    </div>
  )
}

export default Search
