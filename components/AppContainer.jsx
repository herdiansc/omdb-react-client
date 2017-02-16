import React from 'react';

export default class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = {};
    };

    render() {
        return (
            <div className="container">
                { this.props.children }
            </div>
        );
    }
}
