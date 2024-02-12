import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { ModalProps } from '../type';

const MovieModal: React.FC<ModalProps> = ({ movieKey, movie, handleClose, open }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#141414',
        border: '10px solid ',
        boxShadow: 24,
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <iframe
                        className='w-full h-full aspect-video'
                        src={`https://www.youtube.com/embed/${movieKey}?&autoplay=1&mute=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    >
                    </iframe>
                    <Link to={`/watch/${movie.id}`}><button className='p-2 px-12 bg-white rounded-lg text-base font-bold hover:bg-opacity-50'><PlayArrowIcon />Play</button></Link>
                </Box>
            </Fade>
        </Modal>
    )
}

export default MovieModal