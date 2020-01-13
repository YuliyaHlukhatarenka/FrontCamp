import React, { Component } from "react";
import ResultsItem from '../presentational/ResultsItem';

import { connect } from 'react-redux';
import { getData, changeSearchFilter, changeSortFilter, changeSearchString } from '../../actions';

class ResultsBodySection extends Component {
  openFilmPage = (id) => {
    this.setState({ currentPage: "FilmDetailsSection", activeFilmPageDetails: this.state.data.find(el => el.id === id) });
    this.props.getData(this.state.data.find(el => el.id === id).genres[0], 'genres', this.state.sortBy);
  }
  render() {
    let notResultFound = <div></div>;
    //   searchBobySection = <div className="search-body-section-no-results"><p>No films found</p></div>
    // } else {
     // searchBobySection = <ResultsBodySection data={this.props.data} openFilmPage={this.openFilmPage} />
  //  }
      const resultsList  = this.props.data ? this.props.data : [];
      if (resultsList.length === 0) {
        notResultFound = <div className="search-body-section-no-results"><p>No films found</p></div>
      } 
    return (
      <div className="results-body-section">
        {notResultFound}
      { resultsList.map( (item) => ( <ResultsItem 
      key={ item.id } 
      id={item.id}
      image={ item.poster_path}
      releaseDate={ item.release_date}
      title={ item.title }
      genre={ item.genres.join(',')}
      openFilmPage= {this.openFilmPage}/> ) )  }
  </div>
    )
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
)(ResultsBodySection);