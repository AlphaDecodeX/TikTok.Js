import React from 'react'
import "./Video.css"
import { useRef } from 'react';
import { useState } from 'react';
import VideoFooter from './VideoFooter';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        // Stop the video if Playing
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        // Otherwise Play the video
    }
    return (
        <div className="video">
            <video
                className="video__player"
                ref={videoRef}
                onClick={handleVideoPress}
                loop
                src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4">
            </video>
            <VideoFooter />
        </div>
    )
}

export default Video
