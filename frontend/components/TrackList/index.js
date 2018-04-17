import React from 'react'
import Tracks from "../Tracks";

const TrackList = ({tracks}) => {
    return (
        <div className="tracklist">
            <p className="tracklist__tracklist-header">Tracklist</p>
            <Tracks tracks={tracks}/>
        </div>
    )
};

export default TrackList