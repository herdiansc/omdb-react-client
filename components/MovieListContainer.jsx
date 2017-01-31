import React from 'react';

import { Link } from 'react-router';

import MovieItemContainer from './MovieItemContainer.jsx';

export default class MovieListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.page = 1;

        this.loadData = this.loadData.bind(this);
    };

    search(e) {
        e.preventDefault();
        if (this.refs.q.value.length != 0) {
            this.props.router.push('/movies?q=' + this.refs.q.value);
            this.loadData(this.refs.q.value, 1);
        }
    }

    componentWillMount() {
        this.page = this.props.location.query.page || this.page ; 
        this.loadData(this.props.location.query.q, this.page);
    }

    loadData(q, page) {
        scroll(0,0);
        fetch('http://www.omdbapi.com/?s=' + q + '&page=' + page)
            .then(result=>result.json())
            .then(items=>this.setState(items));
    }

    prevClick() {
        this.page = Number(this.page) - 1;
        this.loadData(this.props.location.query.q, this.page);
    }

    nextClick() {
        this.page = Number(this.page) + 1;
        this.loadData(this.props.location.query.q, this.page);
    }

    componentDidMount() {
        this.refs.q.value = this.props.location.query.q;
    }

    pagination() {
        return (
            <div className="row pagination-container">
                <nav className="row text-xs-center">
                    { Number(this.page) > 1 ? <Link to={ `/movies?q=${this.props.location.query.q}&page=${ Number(this.page) - 1 }` } className="btn btn-sm btn-primary" onClick={this.prevClick.bind(this)}>Previous</Link> : null }
                    <Link to={ `/movies?q=${this.props.location.query.q}&page=${ Number(this.page) + 1 }` } className="btn btn-sm btn-primary" onClick={this.nextClick.bind(this)}>Next</Link>
                </nav>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row search-form movie-list">
                    <div className="col-md-12">
                        <h2 className="page-title">Search</h2>
                        <input type="text" placeholder="Enter Movie Title..." ref="q" />
                        <button className="btn btn-primary btn-sm" type="submit" onClick={this.search.bind(this)} >Submit</button>
                    </div>
                </div>

                { this.state.Search ? this.state.Search.map((item, i) => <MovieItemContainer key={i} data={item} /> ) : '' }

                { this.state.totalResults>10 ? this.pagination() : '' }
            </div>
        );
    }
}
