import React from 'react'

const Cards = props => {
    return (
        <div className="row">
            {[...Array(9)].map((x, i) =>
                <div className="col-md-4" key={i}>
                    <img className="card-img-top" src="" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text mb-0">Voices of the streets</p>
                        <small className="text-muted">139 tracks - 7h 12m</small>

                    </div>
                </div>
            )}
        </div>
    )
};

const Home = () => {

    return (
        <div>
            <div className="container">
                <p>New albums</p>
                <Cards/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                            tortor
                            mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
                            magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
                            tortor
                            mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
                            magna mollis euismod. Donec sed odio dui. </p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                    <div className="col-md-4">
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum
                            id
                            ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                            condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
};

export default Home