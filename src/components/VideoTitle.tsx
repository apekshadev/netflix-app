import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';
import { RootState , TitleProps} from '../type';
import { useSelector } from 'react-redux';
import { language } from '../locales/en-US';

const VideoTitle:React.FC<TitleProps> = ({title, overview,id}) => {
  const langKey =  useSelector((state: RootState) => state.language.locale);
  const currentLanguage = language[langKey];
  return (
    <div className='w-screen absolute aspect-video bg-gradient-to-r pt-[20%] px-6 md:px-16 from-black'>
        <h1 className="text-white text-2xl md:text-5xl font-extrabold my-4">{title}</h1>
        <p className='hidden md:inline-block my-4 max-w-xl text-white text-lg font-light '>{overview}</p>
        <div className='flex max-w-xl'>
            <Link to={`/watch/${id}`} className='p-2 px-4 md:px-12 bg-white rounded-lg text-xs md:text-base font-bold hover:bg-opacity-50 flex items-center'><PlayArrowIcon/> <span>{currentLanguage.play}</span></Link>
            <button className='p-2 px-4 md:px-12 rounded-lg text-white font-bold bg-gray-500 bg-opacity-50  hover:bg-opacity-80 text-xs md:text-base mx-2'><InfoOutlinedIcon /> <span>{currentLanguage.moreInfo}</span></button>
        </div>
    </div>
  )
}

export default VideoTitle