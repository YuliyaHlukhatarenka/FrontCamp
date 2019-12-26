import React, { Component } from "react";
import ResultsItem from '../presentational/ResultsItem';

class ResultsBodySection extends Component {
  render() {
      const resultsList  = this.props.data;
    return (
      <div className="results-body-section">
          { resultsList.map( (item) => ( <ResultsItem 
          key={ item.id } 
          id={item.id}
          image={ item.poster_path}
          releaseDate={ item.release_date}
          title={ item.title }
          genre={ item.genres.join(',')}
          openFilmPage= {this.props.openFilmPage}/> ) )  }
      </div>
    )
  }
}


export default ResultsBodySection;