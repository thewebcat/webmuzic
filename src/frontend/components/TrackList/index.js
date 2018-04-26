import React from 'react'
import Tracks from "../Tracks";

const TrackList = (props) => {
    return (
        <div className="tracklist">
            <p className="tracklist__tracklist-header">Tracklist</p>
            {props.song ? <Tracks tracks={props.tracks} song={props.song} is_playing={props.is_playing} togglePlayFromList={props.togglePlayFromList}/> : ''}
        </div>
    )
};

export default TrackList