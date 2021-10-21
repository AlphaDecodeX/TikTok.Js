import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@lpsk</h3>
                <p>This is the description.....</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>
                                    I am a song
                                </p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src="https://lh3.googleusercontent.com/proxy/JsaMUfFTkFGanC1H--d_Suc8tJleF7jzoP8alZDBVLYkfKvOD9tyjKs7ldzQAdtGXfSZT_t6mzXkQgdJADVUM-tO"
                alt="" className="videoFooter__record" />
        </div>
    )
}

export default VideoFooter
