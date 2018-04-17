import React, { Component } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import {Link} from "react-router-dom";


export const ArtistsList = props => {
    return (
        <div className="row">
            {props.artists.map((item, i) =>
                <div className="col-md-3" key={i}>
                    <Link to={`/artists/${item.id}`}>
                        <img className="card-img-top" src={item.image_url} alt="Card image cap"/>
                    </Link>
                    <div className="card-body">
                        <p className="card-text mb-0">{item.name}</p>
                        <small className="text-muted">{item.total_albums} albums - {moment.duration(item.total_duration, "seconds").format("M[m] d[d] h:mm:ss")}</small>
                    </div>
                </div>
            )}
        </div>
    )
};


export const AlbumsList = props => {
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

                    </div>
                </div>
            )}
        </div>
    )
};


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            albums: [],
        }
    }

    async loadHome() {
        const artists_response = await fetch("/api/v0/artists/?page_size=4").then(response => response.json())
        const albums_response = await fetch("/api/v0/albums/?page_size=4").then(response => response.json())
        this.setState({
            artists: artists_response.results,
            albums: albums_response.results
        })
    }

    componentDidMount() {
        this.loadHome();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <p>New artists</p>
                    <ArtistsList artists={this.state.artists}/>
                    <p>New albums</p>
                    <AlbumsList albums={this.state.albums}/>
                </div>
            </div>
        )
    }
}

export default Home