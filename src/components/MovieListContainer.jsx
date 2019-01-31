import React from 'react';

import MovieItemContainer from './MovieItemContainer.jsx';
import PaginationContainer from './PaginationContainer.jsx';
import SearchFormContainer from './SearchFormContainer.jsx';

export default class MovieListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[]};
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
        this.page = page;
        scroll(0,0);
        fetch(`${ process.env.REACT_APP_OMDB_API }?apikey=${ process.env.REACT_APP_OMDB_SECRET }&s=${ q }&page=${page}`)
            .then(result=>result.json())
            .then(items=>this.setState({items: items}));
    }

    render() {
        return (
            <div className="container container-300">
                <div className="row search-form movie-list">
                    <SearchFormContainer colClass={''} loadData={this.loadData} />
                </div>

                { this.state.items.Search ? this.state.items.Search.map((item, i) => <MovieItemContainer key={i} data={item} /> ) : '' }

                { this.state.items.totalResults>10 ? <PaginationContainer q={this.props.location.query.q} page={this.page} clickHandler={this.loadData} /> : '' }
            </div>
        );
    }
}