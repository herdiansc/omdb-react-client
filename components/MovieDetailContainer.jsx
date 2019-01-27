import React from 'react';

import { Link, hashHistory } from 'react-router';

export default class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    image() {
        if (!this.state.Poster || this.state.Poster != 'N/A') {
            return <img src={ this.state.Poster } className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    componentWillMount() {
        fetch(`${ process.env.REACT_APP_OMDB_API }?apikey=${ process.env.REACT_APP_OMDB_SECRET }&i=${ this.props.params.imdbID }&plot=full&r=json`) 
            .then(result=>result.json())
            .then(items=>this.setState(items));
    }

    render() {
        return (
            <div className="container container-300">
                <div className="row">
                    <div className="col-md-12">
                        <div className="search-form">
                            <h2 className="page-title">Movie Detail</h2>
                        </div>
                        <div className="card">
                            <div className="view overlay hm-white-slight">
                                { this.image() }
                                <Link to={ `/detail/${this.state.imdbID}` }>
                                    <div className="mask"></div>
                                </Link>
                            </div>

                            <div className="card-block">
                                <h4 className="card-title">{ this.state.Title }</h4>
                                <p className="card-text card-meta">Released: { this.state.Year }, Type: { this.state.Type }</p>
                                
                                <strong>Plot</strong>
                                <hr />
                                <p className="card-text">{ this.state.Plot }</p>

                                <strong>Genre</strong>
                                <hr />
                                <p className="card-text">{ this.state.Genre }</p>

                                <strong>Director</strong>
                                <hr />
                                <p className="card-text">{ this.state.Director }</p>

                                <strong>Actors</strong>
                                <hr />
                                <p className="card-text">{ this.state.Actors }</p>

                                <strong>IMDB Rating</strong>
                                <hr />
                                <p className="card-text">{ this.state.imdbRating }</p>

                                <strong>Runtime</strong>
                                <hr />
                                <p className="card-text">{ this.state.Runtime }</p>

                                <strong>Rated</strong>
                                <hr />
                                <p className="card-text">{ this.state.Rated }</p>

                                <strong>Date Released</strong>
                                <hr />
                                <p className="card-text">{ this.state.Released }</p>

                                <div className="read-more">
                                    <button onClick={ hashHistory.goBack } className='btn btn-default'>Back</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
