import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import '../public/static/css/style.css';

import AppComponent from './components/AppComponent.jsx';
import HomeComponent from './components/HomeComponent.jsx';
import MovieListComponent from './components/MovieListComponent.jsx';
import MovieDetailComponent from './components/MovieDetailComponent.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={AppComponent}>
            <IndexRoute component={HomeComponent}/>
            <Route path="/movies" component={MovieListComponent}/>
            <Route path="/detail/:imdbID" component={MovieDetailComponent}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
