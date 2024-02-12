import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieTrailer } from '../../api/nowPlaying';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
const WatchMovie = () => {
    const { id } = useParams();
    const history = useNavigate();

    const [movieKey, setMovieKey] = useState('');
    const fetchMovie = async () => {
        const response = await getMovieTrailer(id);
        setMovieKey(response[0]?.key)
    }
    useEffect(() => {
        if (id) fetchMovie()
    }, [id]);

    const navigateToBack = ()=>{
        history(-2);
    }
  
      return (
        <div className="w-screen h-screen overflow-hidden relative">
            <KeyboardBackspaceSharpIcon fontSize='large' onClick={navigateToBack} style={{ color: 'white', position:'fixed' , left:'2rem', top:'2rem' , zIndex:99, cursor:'pointer'}}/>
            <iframe
                className='w-full h-full aspect-video absolute top-0 left-0'
                src={`https://www.youtube.com/embed/${movieKey}?&autoplay=1&mute=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>

    )
}

export default WatchMovie
