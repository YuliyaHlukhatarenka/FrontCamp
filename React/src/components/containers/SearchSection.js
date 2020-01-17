import React, { Component } from "react";
import { connect } from 'react-redux';
import { getData, changeSearchFilter } from '../../actions';
import { Redirect } from 'react-router-dom';

class SearchSection extends Component {
  state = {
    str: this.props.searchStr,
    isSearchButtonPressed: false,
  };

  searchEnterHandler = evt => {
    if (evt.key === 'Enter') {
      this.getDataFromServer();
    }
  };

  getDataFromServer = () => {
    this.props.getData(this.state.str, this.props.searchBy, this.props.sortBy);
    this.setState({isSearchButtonPressed: true});
  }

  render() {
  //   if (this.props.searchStr != '') {
  //     this.getDataFromServer();
  // }
    if (this.state.isSearchButtonPressed == true) return <Redirect to={`/search/${this.state.str}`} />; 
    let btn_title_color;
    let btn_genre_color;
    if (this.props.searchBy === "title") {
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
            value={this.state.str}
            onChange={e => this.setState({ str: e.target.value })}
            onKeyPress={this.searchEnterHandler}
          />
          <button className="search-button" onClick={this.getDataFromServer}>SEARCH</button>
          <div className="results-header-section__filter-section">
            <label>SEARCH BY</label>
            <button className={btn_title_color} onClick={e => this.props.changeSearchFilter(e.target.value)} value='title'>TITLE</button>
            <button className={btn_genre_color} onClick={e => this.props.changeSearchFilter(e.target.value)} value='genres'>GENRE</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    searchStr: state.searchString.searchString,
    data: state.filmList.data,
    searchBy: state.searchFilter.searchBy,
    sortBy: state.sortFilter.sortBy,
  }),
  {
    getData,
    changeSearchFilter,
  }
)(SearchSection);
