import React from 'react';
import SearchFormContainer from './SearchFormContainer.jsx';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container search-form-container">
                <div className="row search-form">
                    <SearchFormContainer colClass={'home'} />
                </div>
            </div>
        );
    }
}
