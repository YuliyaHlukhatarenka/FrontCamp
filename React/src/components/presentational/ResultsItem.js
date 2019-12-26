import React from "react";
import propTypes from 'prop-types';

const ResultsItem = ({ id, image = "", releaseDate = "", title = "Image Title", genre = "", openFilmPage }) => (
    <article onClick={() => openFilmPage(id)}>
        <figure>
            <img src={image} />
        </figure>
        <div className="results-body-section__film-info">
        <figcaption>
            <h3>{title}</h3>
            <p>{genre}</p>
        </figcaption>
        <div>
            <p className="results-body-section__result-item-year">{releaseDate.slice(0, 4)}</p>
        </div>
        </div>
    </article>
);

ResultsItem.propTypes = {
    releaseDate: propTypes.string.isRequired,
    title: propTypes.string.isRequired
};

export default ResultsItem;