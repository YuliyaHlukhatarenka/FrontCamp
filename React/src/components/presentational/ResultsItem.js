import React from "react";
import propTypes from 'prop-types';

const ResultsItem = ({ id, image = "", releaseDate = "", title = "Image Title", genre = "", openFilmPage }) => (
    <article onClick={() => openFilmPage(id)}>
        <figure>
            <img src={image} />
        </figure>
        <div className="film-info-section">
        <figcaption>
            <h3>{title}</h3>
            <p>{genre}</p>
        </figcaption>
        <p>{releaseDate}</p>
        </div>
    </article>
);

ResultsItem.propTypes = {
    releaseDate: propTypes.string.isRequired,
    title: propTypes.string.isRequired
};

export default ResultsItem;