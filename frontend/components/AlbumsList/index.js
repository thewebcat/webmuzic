import React from 'react';
import moment from "moment/moment";
import { Link } from "react-router-dom";
import Tags from "../Tags";

const AlbumsList = props => {
    return (
        <div className="row">
            {props.albums.map((item, i) =>
                <div className="col-md-3" key={i}>
                    <Link to={`/albums/${item.id}`}>
                        <img className="card-img-top" src={item.image_url} alt="Card image cap"/>
                    </Link>
                    <div className="card-body">
                        <p className="card-text mb-0">{item.name}</p>
                        <small className="text-muted">{item.total_tracks} tracks - {moment.duration(item.total_duration, "seconds").format("M[m] d[d] h:mm:ss")}</small>
                        <Tags tags={item.tags}/>
                    </div>
                </div>
            )}
        </div>
    )
};

export default AlbumsList