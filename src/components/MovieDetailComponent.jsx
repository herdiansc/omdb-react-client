import React from 'react';

import { Link, hashHistory } from 'react-router';

import { connect } from "react-redux";
import { getMovieDetail } from '../actions';

const mapStateToProps = state => {
    return { item: state.item };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetail: payload => dispatch(getMovieDetail(payload))
    };
}

class MovieDetail extends React.Component {
    image() {
        if (!this.props.item.Poster || this.props.item.Poster != 'N/A') {
            return <img src={ this.props.item.Poster } className="img-fluid" alt="" />
        } else {
            return;
        }
    }

    componentDidMount() {
        this.props.getMovieDetail(this.props.params.imdbID);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="search-form">
                            <h2 className="page-title">Movie Detail</h2>
                        </div>

                        <div className="card">
                            <div className="view overlay hm-white-slight">
                                { this.image() }
                                <Link to={ `/detail/${this.props.item.imdbID}` }>
                                    <div className="mask"></div>
                                </Link>
                            </div>

                            <div className="card-block">
                                <h4 className="card-title">{ this.props.item.Title }</h4>
                                <p className="card-text card-meta">Released: { this.props.item.Year }, Type: { this.props.item.Type }</p>
                                
                                <strong>Plot</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Plot }</p>

                                <strong>Genre</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Genre }</p>

                                <strong>Director</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Director }</p>

                                <strong>Actors</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Actors }</p>

                                <strong>IMDB Rating</strong>
                                <hr />
                                <p className="card-text"><a href={ `https://www.imdb.com/title/${ this.props.item.imdbID }/` } target="_blank">{ this.props.item.imdbRating }</a> ({ this.props.item.imdbVotes } Votes)</p>

                                <strong>Runtime</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Runtime }</p>

                                <strong>Rated</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Rated }</p>

                                <strong>Date Released</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Released }</p>

                                <strong>Country (Language)</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Country } ({ this.props.item.Language })</p>

                                <strong>Production</strong>
                                <hr />
                                <p className="card-text">{ this.props.item.Production }</p>

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

const MovieDetailComponent = connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
export default MovieDetailComponent;