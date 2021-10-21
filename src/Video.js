import React from 'react'
import "./Video.css"
import { useRef } from 'react';
import { useState } from 'react';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, shares, messages }) {
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
                src={url}>
            </video>
            <VideoFooter channel={channel} description={description} song={song} />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
