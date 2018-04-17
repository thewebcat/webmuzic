import React, { Component } from 'react'
import { ArtistsList } from '../Home'

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: []
        }
    }

    async loadArtists() {
        this.setState({
            artists: await fetch("/api/v0/artists/").then(response => response.json())
        })
    }

    componentDidMount() {
        this.loadArtists();
    }

    render () {
        return (
            <div>
                <div className="container">
                    <p>All artists</p>
                    <ArtistsList artists={this.state.artists}/>
                </div>
            </div>
        )
    }
}

export default Artists