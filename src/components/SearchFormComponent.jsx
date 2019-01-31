import React from 'react';

import { withRouter } from 'react-router' ;

class SearchFormComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    search(e) {
        e.preventDefault();
        if (this.refs.q.value.length != 0) {
            this.props.router.push(`/movies?q=${this.refs.q.value}`);
            if (this.props.loadData) this.props.loadData(this.refs.q.value, 1);
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

export default withRouter(SearchFormComponent);