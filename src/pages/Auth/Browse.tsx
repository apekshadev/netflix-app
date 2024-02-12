import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { getNowPlaying } from '../../api/nowPlaying';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../../redux/slices/movieSlice';
import MainContainer from '../../components/MainContainer';
import SecondaryContainer from '../../components/SecondaryContainer';
import GptSearch from '../../components/GptSearch';
const Browse = () => {
  const dispatch = useDispatch();
  const isGptSearchVisible = useSelector((state:any)=>state.gptSearch.showGptSearch)
  const nowPlayingMovies = async () => {
    let res = await getNowPlaying();
    dispatch(addNowPlayingMovies(res));
  }
  useEffect(() => {
    nowPlayingMovies();
  }, [])
  return (
    <>
      {isGptSearchVisible ? <GptSearch /> :<> <MainContainer />
      <SecondaryContainer /></>}
     
    </>
  )
}

export default Browse