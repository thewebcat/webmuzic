import React from 'react'
import moment from "moment/moment";
import Player from "../../containers/Player";

const AlbumInfo = ({album}) => {
    return (
        <div className="album-info">
            <h3 className="font-weight-bold">{album.name}</h3>
            <div className="pt-3 text-black-50 lead">
                <small>{album.total_tracks} tracks - {moment.duration(album.total_duration, "seconds").format("h[h] mm[m] ss[s]")}</small>
            </div>
            <div className="d-inline-block mt-5 p-4 album-info__play-button">
                <i className="fa fa-play">&nbsp;</i>
            </div>
            <Player/>
        </div>
    )
};

export default AlbumInfo