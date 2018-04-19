import React, { Component } from 'react'
import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import {Link} from "react-router-dom";
import Tags from "../components/Tags";
import ArtistsList from "../components/ArtistsList";
import AlbumsList from "../components/AlbumsList";



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