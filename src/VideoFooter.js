import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>
                                    {song}
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
