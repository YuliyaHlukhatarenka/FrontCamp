import React, { Component } from "react";
import { connect } from 'react-redux';
import { changeSortFilter } from '../../actions';  

class ResultsHeaderSection extends Component {
  render() {
    let btn_release_date_color;
    let btn_rating_color;
    if ( this.props.sortBy === "release_date" ) {
      btn_release_date_color = "red-button";
      btn_rating_color = "grey-button";
    } else {
      btn_rating_color = "red-button";
      btn_release_date_color = "grey-button";
    }
    return (
      <div className="results-header-section">
          <div className="results-header-section__total-result">
              <span>{this.props.total} movie found</span>
          </div>
          <div className="results-header-section__filter-section">
              <label>SORT BY</label>
              <button className={btn_release_date_color} onClick={e => this.props.changeSortFilter(e.target.value)} value='release_date'>RELEASE DATE</button>
              <button className={btn_rating_color} onClick={e => this.props.changeSortFilter(e.target.value)} value='vote_count'>RATING</button>
          </div>
      </div>
    )
  }
}

export default connect (
  state => ({
    sortBy: state.sortFilter.sortBy,
    total: state.filmList.total
  }),
  {
    changeSortFilter
  }
) (ResultsHeaderSection);