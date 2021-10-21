import React from 'react'
import "./Video.css"

function Video() {
    return (
        <div className = "video">
            <video
            className = "video__player" 
            loop 
            src="https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4"></video>
            {/* VideoFotter */}
        </div>
    )
}

export default Video
