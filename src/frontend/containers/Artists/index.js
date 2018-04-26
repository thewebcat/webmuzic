import React, { Component } from 'react'
import ArtistsList from "../../components/ArtistsList";

class Artists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [], next_url: ''
        }
    }

    async loadArtists() {
        const artists_response = await fetch("/api/v0/artists/").then(response => response.json());
        this.setState({
            artists: artists_response.results,
            next_url: artists_response.next
        })
    }

    loadMore = (e) => {
        const _this = this;

        fetch(this.state.next_url).then(function(response) {
            response.json().then(function (data) {
                _this.setState({
                    artists: _this.state.artists.concat(data.results),
                    next_url: data.next
                })
            });
        });
    };

    componentDidMount() {
        this.loadArtists();
    }

    render () {
        return (
            <div>
                <div className="container">
                    <p>All artists</p>
                    <ArtistsList artists={this.state.artists}/>
                    <div className="text-center"><button className="btn btn-secondary" onClick={this.loadMore}>Load more</button></div>
                </div>
            </div>
        )
    }
}

export default Artists