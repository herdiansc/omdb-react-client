import React from 'react';

export default class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    };
    
    search() {
        if (this.refs.q.value.length >= 3) {
            fetch('http://www.omdbapi.com/?s=' + this.refs.q.value)
                .then(result=>result.json())
                .then(items=>this.setState(items));
        }
    }

    render() {
        return (
            <div className="container">
                { this.props.children }
            </div>
        );
    }
}
