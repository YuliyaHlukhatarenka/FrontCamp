import React, { Component } from "react";
import FilmDetailsSection from '../presentational/FilmDetailsSection';
import ResultsHeaderSection from '../containers/ResultsHeaderSection';
import ResultsBodySection from '../containers/ResultsBodySection';

class FilmPage extends Component {
    render() {
        return (
            <div className="main-container">
                <FilmDetailsSection />
                <ResultsHeaderSection />
                <ResultsBodySection />
            </div>
        );
    }
}

export default FilmPage;
