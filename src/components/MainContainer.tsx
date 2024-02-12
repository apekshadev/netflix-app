import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector((state: any) => state?.movie?.nowPlayingMovies);
    
    if(!movies || movies.length === 0) return<div>Loading...</div>;
    const mainMovie = movies[0]
    const {original_title, overview,id} = mainMovie || {};
    return (
        <main className='pt-[35%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview={overview} id={id}/>
            <VideoBackground id={id}/>
        </main>
    )
}

export default MainContainer