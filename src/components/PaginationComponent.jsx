import React from 'react';

import { Link } from 'react-router';

import { connect } from "react-redux";
import { getMovieList } from '../actions';

const mapStateToProps = state => {
    return { items: state.items, page: state.page };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieList: payload => dispatch(getMovieList(payload))
    };
}

class Pagination extends React.Component {
    prevClick() {
        this.props.getMovieList({q: this.props.q, page: Number(this.props.page) - 1});
    }

    nextClick() {
        this.props.getMovieList({q: this.props.q, page: Number(this.props.page) + 1});
    }

    render() {
        return (
            <div>
                { this.props.items.totalResults>10 && 
                    <div className="row pagination-container">
                        <nav className="row text-xs-center">
                            { Number(this.props.page) > 1 ? <Link to={ `/movies?q=${this.props.q}&page=${ Number(this.props.page) - 1 }` } className="btn btn-sm btn-primary" onClick={this.prevClick.bind(this)}>Previous</Link> : null }
                            <Link to={ `/movies?q=${this.props.q}&page=${ Number(this.props.page) + 1 }` } className="btn btn-sm btn-primary" onClick={this.nextClick.bind(this)}>Next</Link>
                        </nav>
                    </div>
                }
            </div>
        );
    }
}

const PaginationComponent = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export default PaginationComponent;
