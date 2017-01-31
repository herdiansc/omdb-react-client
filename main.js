import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import AppContainer from './components/AppContainer.jsx';
import HomeContainer from './components/HomeContainer.jsx';
import MovieListContainer from './components/MovieListContainer.jsx';
import MovieDetailContainer from './components/MovieDetailContainer.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={HomeContainer}/>
            <Route path="/movies" component={MovieListContainer}/>
            <Route path="/detail/:imdbID" component={MovieDetailContainer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
