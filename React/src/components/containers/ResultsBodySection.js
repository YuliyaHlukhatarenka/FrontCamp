import React, { Component } from "react";
import ResultsItem from '../presentational/ResultsItem';
import { connect } from 'react-redux';

class ResultsBodySection extends Component {
  openFilmPage = (id) => {
    this.setState({ currentPage: "FilmDetailsSection", activeFilmPageDetails: this.state.data.find(el => el.id === id) });
    this.props.getData(this.state.data.find(el => el.id === id).genres[0], 'genres', this.state.sortBy);
  }
  render() {
    let filmList = this.props.data;
    let resultToShow = <div className="search-body-section-no-results"><p>No films found</p></div>;
    if (filmList.length) {
      resultToShow = <div className="results-body-section">
        {filmList.map((item) => (<ResultsItem
          key={item.id}
          id={item.id}
          image={item.poster_path}
          releaseDate={item.release_date}
          title={item.title}
          genre={item.genres.join(',')}
          openFilmPage={this.openFilmPage} />))}
      </div>
    }
    return (
      <div>
        {resultToShow}
      </div>
    )
  }
}

export default connect(
  state => ({
    data: state.filmList.data
  })
)(ResultsBodySection);