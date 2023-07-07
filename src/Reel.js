import React from 'react'
import './Reel.css'

const Reel = () => {
  return (

    <iframe className='video' src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        width="1500"
        height="400"
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
    />
    
  )
}

export default Reel