import { useSelector } from 'react-redux';
import useMovieList from '../hooks/useMovieList';
import MovieList from './MovieList'
import { RootState } from '../type';
import { language } from '../locales/en-US';

const SecondaryContainer = () => {
  const { popular, topRated, upComing } = useMovieList();
  const langKey =  useSelector((state: RootState) => state.language.locale);
  const currentLanguage = language[langKey];
  const nowPlaying = useSelector((state: any) => state?.movie?.nowPlayingMovies);
  let Type =currentLanguage.movieType;

  const movieList = [
    {
      title: Type.nowPlaying,
      movies: nowPlaying,
    },
    {
      title: Type.popular,
      movies: popular,
    },
    {
      title: Type.topRated,
      movies: topRated,
    },
    {
      title: Type.upcoming,
      movies: upComing,
    }
  ];
  
  return (
    <div className='bg-black'>
      <div className='relative z-20 mt-0 md:-mt-72'>
      {movieList.map((movies, i) => {
        return (<MovieList key={i} title={movies.title} movies={movies.movies} />)
      })}
      </div>
     
    </div>
  )
}

export default SecondaryContainer