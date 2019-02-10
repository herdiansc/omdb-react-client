import React from 'react';

import { withRouter } from 'react-router' ;
import { connect } from "react-redux";
import { getMovieList } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

class SearchForm extends React.Component {
    search(e) {
        e.preventDefault();
        if (this.refs.q.value.length != 0 && this.props.location.query.q != this.refs.q.value) {
            this.props.router.push(`/movies?q=${this.refs.q.value}`);
            if (this.props.caller == 'list-page') this.props.getMovieList({q: this.refs.q.value, page: 1});
        }
    }

    componentDidMount() {
        this.refs.q.value = this.props.location.query.q || '';
    }

    render() {
        return (
            <div className={`col-md-12 ${this.props.colClass}`}>
                <h2 className="page-title">Search</h2>
                <input type="text" placeholder="Enter Movie Title..." ref="q" />
                <button className="btn btn-primary btn-sm" type="submit" onClick={this.search.bind(this)} >Submit</button>
            </div>
        );
    }
}


const SearchFormComponent = connect(null, mapDispatchToProps)(SearchForm);
export default withRouter(SearchFormComponent);