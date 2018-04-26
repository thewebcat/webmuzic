import React, { Component } from 'react'
import AlbumsList from "../../components/AlbumsList";


class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [], next_url: ''
        }
    }

    async loadAlbums() {
        const albums_response = await fetch("/api/v0/albums/").then(response => response.json());
        this.setState({
            albums: albums_response.results,
            next_url: albums_response.next
        })
    }

    loadMore = (e) => {
        const _this = this;

        fetch(this.state.next_url).then(function(response) {
            response.json().then(function (data) {
                _this.setState({
                    albums: _this.state.albums.concat(data.results),
                    next_url: data.next
                })
            });
        });
    };

    componentDidMount() {
        this.loadAlbums();
    }

    render () {
        return (
            <div>
                <div className="container">
                    <p>All albums</p>
                    <AlbumsList albums={this.state.albums}/>
                    <div className="text-center"><button className="btn btn-secondary" onClick={this.loadMore}>Load more</button></div>
                </div>
            </div>
        )
    }
}

export default Albums