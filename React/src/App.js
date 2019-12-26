import React, { Component } from "react";
import SearchSection from './components/containers/SearchSection';
import ResultsHeaderSection from './components/containers/ResultsHeaderSection';
import ResultsBodySection from './components/containers/ResultsBodySection';
import FilmDetailsSection from './components/presentational/FilmDetailsSection';
import ErrorBoundary from './components/ErrorBoundary';
import dataService from './getDataService';


import './App.css';

class App extends Component {
  state = {
    data: [],
    total: 0,
    currentPage: "SearchSection",
    activeFilmPageDetails: {},
    searchBy: 'title',
    sortBy: 'release date',
  }

  getDataFromServer = (searchStr, searchBy) => {
    const articles = dataService.getData(searchStr, searchBy);
    articles.then(
      response => { this.setState({ data: response.data, total: response.total }) },
      error => { console.log(error) }
    );
  }

  searchByString = (str) => {
    this.getDataFromServer(str, this.state.searchBy);

  }

  changeSearchByFilter = (value) => {
    this.setState({searchBy: value});

  }

  openFilmPage = (id) => {
    this.setState({ currentPage: "FilmDetailsSection", activeFilmPageDetails: this.state.data.find(el => el.id === id) });
    this.setState({searchBy: 'genres'});
    this.getDataFromServer(this.state.data.find(el => el.id === id).genres[0], this.state.searchBy);
  }

  openSearcherPage = () => {
    this.setState({ currentPage: "SearchSection" });
  }

  render() {
    let topSection;
    let searchBobySection;
    if (this.state.currentPage === "FilmDetailsSection") {
      topSection = <FilmDetailsSection data={this.state.activeFilmPageDetails} openSearcherPage={this.openSearcherPage} />
    } else {
      topSection = <SearchSection searchByString={this.searchByString} changeSearchByFilter={this.changeSearchByFilter} searchBy={this.state.searchBy} />
    }
    if (this.state.data.length === 0) {
      searchBobySection = <div className="search-body-section-no-results"><p>No films found</p></div>
    } else {
      searchBobySection = <ResultsBodySection data={this.state.data} openFilmPage={this.openFilmPage} />
    }
    return (
      <ErrorBoundary>
        <div className="main-container">
          {topSection}
          <ResultsHeaderSection total={this.state.total} />
          {searchBobySection}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
