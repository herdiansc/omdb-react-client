import React from 'react';
import SearchFormComponent from './SearchFormComponent.jsx';

class HomeComponent extends React.Component {
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

export default HomeComponent;