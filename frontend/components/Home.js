import React, { Component } from 'react'

const Artists = props => {
    return (
        <div className="row">
            {props.artists.map((item, i) =>
                <div className="col-md-3" key={i}>
                    <img className="card-img-top" src={item.image_url} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text mb-0">{item.name}</p>
                        <small className="text-muted">139 tracks - 7h 12m</small>

                    </div>
                </div>
            )}
        </div>
    )
};


const Albums = props => {
    return (
        <div className="row">
            {props.albums.map((item, i) =>
                <div className="col-md-3" key={i}>
                    <img className="card-img-top" src={item.image_url} alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text mb-0">{item.name}</p>
                        <small className="text-muted">139 tracks - 7h 12m</small>

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
        this.setState({
            artists: await fetch("/api/v0/artists/").then(response => response.json()),
            albums: await fetch("/api/v0/albums/").then(response => response.json())
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
                    <Artists artists={this.state.artists}/>
                    <p>New albums</p>
                    <Albums albums={this.state.albums}/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo,
                                tortor
                                mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                                malesuada
                                magna mollis euismod. Donec sed odio dui. </p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus
                                commodo,
                                tortor
                                mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                                malesuada
                                magna mollis euismod. Donec sed odio dui. </p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                Vestibulum
                                id
                                ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor
                                mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        )
    }

};

export default Home