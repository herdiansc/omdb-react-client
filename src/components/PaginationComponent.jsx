import React from 'react';

import { Link } from 'react-router';

export default class PaginationComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    prevClick() {
        this.props.clickHandler(this.props.q, Number(this.props.page) - 1);
    }

    nextClick() {
        this.props.clickHandler(this.props.q, Number(this.props.page) + 1);
    }

    render() {
        return (
            <div className="row pagination-container">
                <nav className="row text-xs-center">
                    { Number(this.props.page) > 1 ? <Link to={ `/movies?q=${this.props.q}&page=${ Number(this.props.page) - 1 }` } className="btn btn-sm btn-primary" onClick={this.prevClick.bind(this)}>Previous</Link> : null }
                    <Link to={ `/movies?q=${this.props.q}&page=${ Number(this.props.page) + 1 }` } className="btn btn-sm btn-primary" onClick={this.nextClick.bind(this)}>Next</Link>
                </nav>
            </div>
        );
    }
}
