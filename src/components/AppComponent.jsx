import React from 'react';

export default class AppComponent extends React.Component {
    render() {
        return (
            <div className="container container-300">
                { this.props.children }
            </div>
        );
    }
}