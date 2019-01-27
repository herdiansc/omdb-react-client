import React from 'react';

export default class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    };
    
    search() {
        if (this.refs.q.value.length >= 3) {
            fetch(`${ process.env.REACT_APP_OMDB_API }?apikey=${ process.env.REACT_APP_OMDB_SECRET }&s=${ this.refs.q.value }`)
                .then(result=>result.json())
                .then(items=>this.setState(items));
        }
    }

    render() {
        return (
            <div className="container container-300">
                { this.props.children }
            </div>
        );
    }
}
