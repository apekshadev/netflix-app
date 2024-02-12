import { memo } from "react";
import MovieCard from "./MovieCard";
import { movieListProps } from "../type";
const MovieList: React.FC<movieListProps> = memo(function({title, movies}){
    
  return (
    <>
      <p className='font-bold text-xl md:text-3xl px-6 text-white'>{title}</p>
      <div className='flex overflow-x-scroll p-6'>
        <div className='flex'>
          {movies.length &&
            <>
              {movies?.map((movie: any, i: any) => {
                return (<MovieCard movie={movie} key={movie.id} />)
              })}
            </>

          }
        </div>

      </div>
    </>

  )
})



export default MovieList