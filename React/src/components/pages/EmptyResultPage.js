import React, { Component } from "react";
import SearchSection from '../containers/SearchSection';
import ResultsHeaderSection from '../containers/ResultsHeaderSection';
import NotFoundResults from '../presentational/NotFoundResults';

class EmptyResultPage extends Component {
    render() {
        return (
            <div className="main-container">
                <SearchSection />
                <ResultsHeaderSection />
                <NotFoundResults />
            </div>
        );
    }
}

export default EmptyResultPage;