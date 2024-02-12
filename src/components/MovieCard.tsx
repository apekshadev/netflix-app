import React, { memo, useEffect, useState } from 'react'
import { IMG_CDN } from '../constants';
import { getMovieTrailer } from '../api/nowPlaying';
import MovieModal from './MovieModal';
import { CardProps } from '../type';

const MovieCard: React.FC<CardProps> =memo(function({movie}){
  const [movieKey, setMovieKey] = useState('');
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchMovie = async () => {
    const response = await getMovieTrailer(movie?.id);
    setMovieKey(response[0]?.key)
  }
  useEffect(() => {
    if (movie?.id) fetchMovie()
  }, [movie?.id]);

  return (
    <div className='md:w-48 w-28 md:pr-6 pr-3 overflow-hidden transition-transform transform-gpu hover:scale-105'>
      <div onClick={handleOpen}>
        <img src={IMG_CDN + movie?.poster_path} alt='' />
      </div>

      <MovieModal movieKey={movieKey} movie={movie} handleClose={handleClose} open={open} />
    </div>
  )

})
 

export default MovieCard