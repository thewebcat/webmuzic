import React from 'react'
import moment from "moment/moment";

const Tracks = (props) => {
    const isPlaying = (song_id, item, is_playing) => {
        if (song_id === item.id && is_playing) {
            return <div className="tracklist__pause" onClick={e => props.togglePlayFromList(e, item)}><i className="fa fa-pause" aria-hidden="true">&nbsp;</i></div>
        } else {
            return <div className="tracklist__play" onClick={e => props.togglePlayFromList(e, item)}><i className="fa fa-play" aria-hidden="true">&nbsp;</i></div>
        }
    };

    return (
        <ul>
            {props.tracks.map((item, i) =>
                <li className="py-3" key={i}>
                    <div className="d-flex flex-row tracklist__track">
                        <div className="p-2 position-relative">
                            <span className="pr-4">
                                <span>
                                    {isPlaying(props.song.id, item, props.is_playing)}
                                    <span className="tracklist__num">{i+1}</span>
                                </span>
                            </span>
                            <span className="tracklist__title">{item.name}</span>
                        </div>
                        <div className="ml-auto p-2">
                            <small className="text-muted">{moment.duration(item.duration, "seconds").format("M[m] d[d] h:mm:ss")}</small>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    )
};

export default Tracks
