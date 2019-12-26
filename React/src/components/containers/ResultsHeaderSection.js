import React, { Component } from "react";

class ResultsHeaderSection extends Component {
  render() {
    let btn_release_date_color;
    let btn_rating_color;
    if ( this.props.sortBy === "title" ) {
      btn_release_date_color = "red-button";
      btn_rating_color = "grey-button";
    } else {
      btn_rating_color = "grey-button";
      btn_release_date_color = "red-button";
    }
    return (
      <div className="results-header-section">
          <div className="total-result-section">
              <span>{this.props.total} movie found</span>
          </div>
          <div className="filter-section">
              <label>SORT BY</label>
              <button className={btn_release_date_color}>RELEASE DATE</button>
              <button className={btn_rating_color}>RATING</button>
          </div>
      </div>
    )
  }
}

export default ResultsHeaderSection;