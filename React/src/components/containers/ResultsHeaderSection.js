import React, { Component } from "react";

class ResultsHeaderSection extends Component {
  changeSorting = (evt) => {
    this.props.changeSorting(evt.target.value);
  }

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
              <button className={btn_release_date_color} onClick={this.changeSorting} value='release_date'>RELEASE DATE</button>
              <button className={btn_rating_color} onClick={this.changeSorting} value='vote_count'>RATING</button>
          </div>
      </div>
    )
  }
}

export default ResultsHeaderSection;