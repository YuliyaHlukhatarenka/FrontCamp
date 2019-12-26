import React from "react";

const FilmDetailsSection = ({ data, openSearcherPage }) => (
    <div className="search-section">
        <div className="film-details-section">
           <img src={data.poster_path} />
            <div>
                <p>{data.overview}</p>
                <p>{data.vote_count}</p>
                <figcaption>{data.title}</figcaption>
                <p>{data.release_date}</p>
                <p>{data.genre}</p>
            </div>
            <p onClick={openSearcherPage}>&#128270;</p>
        </div>
    </div>
);

export default FilmDetailsSection;