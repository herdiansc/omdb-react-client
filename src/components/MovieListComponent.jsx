import React from 'react';

import MovieItemComponent from './MovieItemComponent.jsx';
import PaginationComponent from './PaginationComponent.jsx';
import SearchFormComponent from './SearchFormComponent.jsx';

import { connect } from "react-redux";
import { getMovieList } from '../actions';

const mapStateToProps = state => {
    return { page: state.page, items: state.items };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

class MovieList extends React.Component {
    componentDidMount() {
        this.props.getMovieList({q: this.props.location.query.q, page: this.props.page});
    }

    render() {
        let movieList;
        if (this.props.items.Search) {
            movieList = this.props.items.Search.map((item, i) => <MovieItemComponent key={i} data={item} /> );
        } else {
            movieList = <div className="alert alert-info" role="alert">Not Found!</div> 
        }

        return (
            <div>
                <div className="row search-form movie-list">
                    <SearchFormComponent colClass={''} caller={'list-page'} />
                </div>
                
                { movieList }

                <PaginationComponent q={this.props.location.query.q} page={this.props.page} />
            </div>
        );
    }
}

const MovieListComponent = connect(mapStateToProps, mapDispatchToProps)(MovieList);
export default MovieListComponent;