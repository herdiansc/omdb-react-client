import React from 'react';
import SearchFormComponent from './SearchFormComponent.jsx';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container search-form-container">
                <div className="row search-form">
                    <SearchFormComponent colClass={'home'} />
                </div>
            </div>
        );
    }
}
