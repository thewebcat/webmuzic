import React from 'react'
import Tracks from "../Tracks";

const TrackList = (props) => {
    return (
        <div className="tracklist">
            <p className="tracklist__tracklist-header">Tracklist</p>
            <Tracks tracks={props.tracks} song={props.song}/>
        </div>
    )
};

export default TrackList