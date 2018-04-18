import React, { Component } from 'react'
import TrackList from "../../components/TrackList";
import AlbumInfo from "../../components/AlbumInfo";
import Player from "../Player";

class AlbumDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            album: {}, tracks: [],
            song: {id: '', name: '', duration: ''}
        };
        this.song_counter = 0
    }

    async loadAlbum() {
        const album_response = await fetch(`/api/v0/albums/${this.props.match.params.number}/`).then(response => response.json());
        this.setState({
            album: {
                name: album_response.name,
                image_url: album_response.image_url,
                total_tracks: album_response.total_tracks,
                total_duration: album_response.total_duration
            },
            artist: album_response.artist,
            tracks: album_response.track_set,
            song: album_response.track_set[0],
            is_playing: false,
        });
    }

    componentDidMount() {
        this.loadAlbum();
    }

    togglePlay = () => {
        this.setState({is_playing: !this.state.is_playing});
    };

    onNext = () => {
        if (this.song_counter < this.state.tracks.length) {
            this.song_counter += 1;
            this.setState({
                song: this.state.tracks[this.song_counter]
            });
            console.log(this.state.tracks)
        }
    };

    onPrev = () => {
        if (this.song_counter >= 0) {
            if (this.song_counter > 0) this.song_counter -= 1;
            this.setState({
                song: this.state.tracks[this.song_counter]
            });
        }
    };

    render () {
        return (
            <div>
                <div className="row m-0 p-0 align-items-top" >
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="mx-auto text-center album__cover">
                            <img className="d-inline-block d-md-block " src={this.state.album.image_url} alt={this.state.album.name}/>
                            <div className="my-3 p-3 d-inline-block text-justify album__text">
                                Believe is the twenty-second studio album by American singer-actress Cher, first released on October 22, 1998 by WEA and distributed in North America by Warner Bros. Records. Following the failure of her previous studio album It's a Man's World, her record company encouraged her to return to the studio to pursue a new musical direction. Recording took place over the summer at the Dreamhouse Studios in London and the Soundworks Studios in New York under the guidance of English producers Mark Taylor and Brian Rawling. The album was dedicated to her ex-husband Sonny Bono, who died earlier that year.
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-3">
                        <AlbumInfo album={this.state.album} togglePlay={this.togglePlay}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5">
                        <TrackList tracks={this.state.tracks} song={this.state.song}/>
                    </div>
                </div>
                <Player
                    onPrev={this.onPrev}
                    onNext={this.onNext}
                    artist={this.state.artist}
                    song={this.state.song}
                    is_playing={this.state.is_playing}
                    togglePlay={this.togglePlay}
                />
            </div>
        )
    }
}

export default AlbumDetails