import React, { useEffect, useState } from 'react'
import { getMovieTrailer } from '../api/nowPlaying';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailer } from '../redux/slices/movieSlice';
import { videoId } from '../type';


const VideoBackground: React.FC<videoId> = ({ id }) => {
    const dispatch = useDispatch();
    const fetchMovieTrailer = async () => {
        const response = await getMovieTrailer(id);
        const getTrailer = response.find((movie: any) => movie.type === "Trailer");
        dispatch(addTrailer(getTrailer.length ? getTrailer[0] : response[0]))
    }
    useEffect(() => {
        if (id) {
            fetchMovieTrailer();
        }
    }, [id]);
    let videoId = useSelector((state:any)=>state?.movie?.trailer?.key);

    return (
        <div className='w-screen'>
            <iframe
                className='w-screen aspect-video'
                src={`https://www.youtube.com/embed/${videoId}?&autoplay=1&mute=1`}
            >
            </iframe>
        </div>
    )
}

export default VideoBackground