import React, { Component } from "react";
import SearchSection from './components/containers/SearchSection';
import ResultsHeaderSection from './components/containers/ResultsHeaderSection';
import ResultsBodySection from './components/containers/ResultsBodySection';
import FilmDetailsSection from './components/presentational/FilmDetailsSection';
import ErrorBoundary from './components/ErrorBoundary';

import { connect } from 'react-redux';
import { getData, changeSearchFilter, changeSortFilter, changeSearchString } from './actions';


import './App.css';

class App extends Component {
  state = {
    currentPage: "SearchSection",
    activeFilmPageDetails: {},
  }

  // getDataFromServer = (searchStr, searchBy, sortBy) => {
  //   const articles = dataService.getData(searchStr, searchBy, sortBy);
  //   articles.then(
  //     response => { this.setState({ data: response.data, total: response.total }) },
  //     error => {
  //       console.log(error);
  //       this.setState({ data: mockData.data, total: mockData.total });
  //     }
  //   );
  // }

  searchByString = (str) => {
   // this.setState({ searchStr: str });
    this.props.getData(str, this.state.searchBy, this.state.sortBy);
  }

  // changeSearchByFilter = (value) => {
  //   this.setState({ searchBy: value });
  // }

  openFilmPage = (id) => {
    this.setState({ currentPage: "FilmDetailsSection", activeFilmPageDetails: this.state.data.find(el => el.id === id) });
    this.props.getData(this.state.data.find(el => el.id === id).genres[0], 'genres', this.state.sortBy);
  }

  openSearcherPage = () => {
    console.log(this.state.searchStr);
    this.setState({ currentPage: "SearchSection" });
    this.props.getData(this.state.searchStr, this.state.searchBy, this.state.sortBy);
  }

  // changeSorting = (sortBy) => {
  //   this.setState({ sortBy: sortBy });
  //   this.props.getData(this.state.currentSearchString, this.state.searchBy, sortBy);
  // }

  render() {
    let topSection;
    if (this.state.currentPage === "FilmDetailsSection") {
      topSection = <FilmDetailsSection data={this.state.activeFilmPageDetails} openSearcherPage={this.openSearcherPage} />
    } else {
      topSection = <SearchSection searchStr={this.props.searchStr} searchByString={this.searchByString} changeSearchByFilter={this.props.changeSearchFilter} searchBy={this.props.searchBy} />
    }

    return (
      <ErrorBoundary>
        <div className="main-container">
          <SearchSection />
          <ResultsHeaderSection/>
          <ResultsBodySection />
        </div>
      </ErrorBoundary>
    );
  }
}

export default connect(
  state => ({
    data: state.data,
    total: state.total,
    searchString: state.searchString,
    searchBy: 'title',
    sortBy: 'release_date',
  }),
  {
    getData,
    changeSearchString,
    changeSearchFilter,
    changeSortFilter
  }
)(App);
