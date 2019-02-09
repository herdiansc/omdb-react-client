import React from 'react';

import ProgressBarComponent from './ProgressBarComponent.jsx';

export default class AppComponent extends React.Component {
    render() {
        return (
            <div className="container container-300">
            	<ProgressBarComponent />
                { this.props.children }
            </div>
        );
    }
}