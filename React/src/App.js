import React, { Component } from "react";
import SearchSection from './components/containers/SearchSection';
import ResultsHeaderSection from './components/containers/ResultsHeaderSection';
import ResultsBodySection from './components/containers/ResultsBodySection';
import FilmDetailsSection from './components/presentational/FilmDetailsSection';
import ErrorBoundary from './components/ErrorBoundary';
import dataService from './getDataService';
import mockData from  "./data.json";


import './App.css';

class App extends Component {
  state = {
    data: [],
    total: 0,
    searchStr: '',
    currentPage: "SearchSection",
    activeFilmPageDetails: {},
    searchBy: 'title',
    sortBy: 'release_date',
  }

  getDataFromServer = (searchStr, searchBy, sortBy) => {
    const articles = dataService.getData(searchStr, searchBy, sortBy);
    articles.then(
      response => { this.setState({ data: response.data, total: response.total }) },
      error => { 
        console.log(error);
        this.setState({ data: mockData.data, total: mockData.total });
       }
    );
  }

  searchByString = (str) => {
    this.setState({searchStr: str});
    this.getDataFromServer(str, this.state.searchBy, this.state.sortBy);
  }

  changeSearchByFilter = (value) => {
    this.setState({searchBy: value});
  }

  openFilmPage = (id) => {
    this.setState({ currentPage: "FilmDetailsSection", activeFilmPageDetails: this.state.data.find(el => el.id === id) });
    this.getDataFromServer(this.state.data.find(el => el.id === id).genres[0], 'genres', this. state.sortBy );
  }

  openSearcherPage = () => {
    console.log(this.state.searchStr);
    this.setState({ currentPage: "SearchSection" });
    this.getDataFromServer(this.state.searchStr, this.state.searchBy, this.state.sortBy);
  }

  changeSorting = (sortBy) => {
    this.setState({sortBy: sortBy});
    this.getDataFromServer(this.state.currentSearchString, this.state.searchBy, sortBy);
  }

  render() {
    let topSection;
    let searchBobySection;
    if (this.state.currentPage === "FilmDetailsSection") {
      topSection = <FilmDetailsSection data={this.state.activeFilmPageDetails} openSearcherPage={this.openSearcherPage} />
    } else {
      topSection = <SearchSection searchStr={this.state.searchStr} searchByString={this.searchByString} changeSearchByFilter={this.changeSearchByFilter} searchBy={this.state.searchBy} />
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
          <ResultsHeaderSection total={this.state.total} changeSorting={this.changeSorting} sortBy={this.state.sortBy}/>
          {searchBobySection}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
