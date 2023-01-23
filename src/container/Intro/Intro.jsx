import './Intro.css';
import { BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants'
import { useRef, useState } from 'react';

const Intro = () => {
  const videoRef= useRef();
  const [isVideoPlay, playVideo] = useState(false);
  const handleToggleVideo = () => {
    playVideo((prev) => !prev);
    if(isVideoPlay) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
  }

  return (
    <div className='intro'>
      <video 
        src={meal} 
        type="video/mp4"
        ref={videoRef}
        loop
        controls={false}
        muted>
      </video>
      <div className="intro__overlay flex-center">
        <div className='intro__overlay-circle flex-center' onClick={handleToggleVideo}>
          {isVideoPlay ? (< BsPauseFill color="#fff" fontSize={30}/>) : (< BsFillPlayFill color="#fff" fontSize={30}/>)}
        </div>
      </div>
    </div>
  )
};

export default Intro;
