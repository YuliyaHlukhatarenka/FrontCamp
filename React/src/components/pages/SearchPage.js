import React, { Component } from "react";
import SearchSection from '../containers/SearchSection';
import ResultsHeaderSection from '../containers/ResultsHeaderSection';
import ResultsBodySection from '../containers/ResultsBodySection';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { getData, changeSearchString } from '../../actions';

const SearchPage = ( props ) => {
   props.getData(props.match.params.query);
    return (
    <div className="main-container">
        <SearchSection />
        <ResultsHeaderSection />
        <ResultsBodySection />
    </div>
        );
    }

export default connect( null, { getData }) (SearchPage);