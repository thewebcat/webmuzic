import React from 'react'
import moment from "moment/moment";

const AlbumInfo = (props) => {
    return (
        <div className="album-info">
            <h3 className="font-weight-bold">{props.album.name}</h3>
            <div className="pt-3 text-black-50 lead">
                <small>{props.album.total_tracks} tracks - {moment.duration(props.album.total_duration, "seconds").format("h[h] mm[m] ss[s]")}</small>
            </div>
            <div className="d-inline-block mt-5 p-4 album-info__play-button" onClick={props.togglePlay}>
                <i className="fa fa-play">&nbsp;</i>
            </div>
        </div>
    )
};

export default AlbumInfo