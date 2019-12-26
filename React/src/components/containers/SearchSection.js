import React, { Component } from "react";

class ResearchSection extends Component {
  state = {
    searchStr: this.props.searchStr,
  };

  changeStateValue = evt => {
      this.setState({ searchStr: evt.target.value });
  };
  
  searchEnterHandler = evt => {
    if (evt.key === 'Enter') {
      this.props.searchByString(this.state.searchStr);
    }
  };

  searchButtonHandler = () => {
    this.props.searchByString(this.state.searchStr);
  }

  changeSearchByFilter = (evt) => {
    this.props.changeSearchByFilter(evt.target.value);
  }

  render() {
    let btn_title_color;
    let btn_genre_color;
    if ( this.props.searchBy === "title" ) {
      btn_title_color = "red-button";
      btn_genre_color = "grey-button";
    } else {
      btn_title_color = "grey-button";
      btn_genre_color = "red-button";
    }
    return (
      <div className="search-section">
        <div className="search-section__wrapper">
          <h1>FIND YOUR MOVIE</h1>
          <input
            type="text"
            name="search"
            defaultValue={this.props.searchStr}
            value={this.searchStr}
            onChange={this.changeStateValue}
            onKeyPress={this.searchEnterHandler}
          />
          <button className="search-button" onClick={this.searchButtonHandler}>SEARCH</button>
          <div className="results-header-section__filter-section">
            <label>SEARCH BY</label>
            <button className={btn_title_color} onClick={this.changeSearchByFilter} value='title'>TITLE</button>
            <button className={btn_genre_color} onClick={this.changeSearchByFilter} value='genres'>GENRE</button>
          </div>
        </div>
      </div>
    )
  }
}


export default ResearchSection;