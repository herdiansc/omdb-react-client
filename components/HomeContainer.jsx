import React from 'react';

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    
    search(e) {
        e.preventDefault();
        if (this.refs.q.value.length != 0) {
            this.props.router.push('/movies?q=' + this.refs.q.value);
        }
    }

    render() {
        return (
            <div className="container search-form-container">
                <div className="row search-form">
                    <div className="col-md-12 home">
                        <h2 className="page-title">Search</h2>
                        <input type="text" placeholder="Enter Movie Title..." ref="q" />
                        <button className="btn btn-primary btn-sm" type="submit" onClick={this.search.bind(this)} >Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}
