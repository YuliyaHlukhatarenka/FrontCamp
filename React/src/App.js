import React, { Component } from "react";
import FilmPage from './components/pages/FilmPage';
import SearchPage from './components/pages/SearchPage';
import EmptyResultPage from './components/pages/EmptyResultPage';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route exact path='/' component={EmptyResultPage} />
            <Route path='/search/:query?' component={SearchPage} />
            <Route path="/film" component={FilmPage} />
            <Route component={EmptyResultPage} /> 
          </Switch>
        </Router>
      </ErrorBoundary>
    );

export default App;
