import React, { Component } from 'react'
import { AlbumsList } from "../Home";


class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: []
        }
    }

    async loadAlbums() {
        this.setState({
            albums: await fetch("/api/v0/albums/").then(response => response.json())
        })
    }

    componentDidMount() {
        this.loadAlbums();
    }

    render () {
        return (
            <div>
                <div className="container">
                    <p>All albums</p>
                    <AlbumsList albums={this.state.albums}/>
                </div>
            </div>
        )
    }
}

export default Albums