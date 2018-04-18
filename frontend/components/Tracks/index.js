import React from 'react'
import moment from "moment/moment";

const Tracks = (props) => {
    return (
        <ul>
            {props.tracks.map((item, i) =>
                <li className="py-3" key={i}>
                    <div className="d-flex flex-row">
                        <div className="p-2">
                            <span className="pr-4 tracklist__num">
                                {props.song.id === item.id ? <div className="d-inline-block"><i className="fa fa-play" aria-hidden="true">&nbsp;</i></div> : i+1 }</span>
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
