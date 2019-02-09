import React from 'react';

import MovieItemComponent from './MovieItemComponent.jsx';
import PaginationComponent from './PaginationComponent.jsx';
import SearchFormComponent from './SearchFormComponent.jsx';

import { connect } from "react-redux";
import { getMovieList } from '../actions';

const mapStateToProps = state => {
  return { page: state.page, items: state.items };
};

function mapDispatchToProps(dispatch) {
  return {
    getMovieList: payload => dispatch(getMovieList(payload))
  };
}

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1;
    };

    componentDidMount() {
        this.props.getMovieList({q: this.props.location.query.q, page: this.props.page});
    }

    render() {
        return (
            <div>
                <div className="row search-form movie-list">
                    <SearchFormComponent colClass={''} caller={'list-page'} />
                </div>
                
                { this.props.items.Search.map((item, i) => <MovieItemComponent key={i} data={item} /> ) }

                <PaginationComponent q={this.props.location.query.q} page={this.props.page} />
            </div>
        );
    }
}

const MovieListComponent = connect(mapStateToProps, mapDispatchToProps)(MovieList);
export default MovieListComponent;