import React, { useEffect, useState } from "react";
import { API_URL } from "utils/urls";
import { Link } from "react-router-dom";

export const MoviesList = () => {
const [movies, setMovies] = useState([]);

useEffect(() => {
    fetch(API_URL)
    .then((res) => res.json())
    .then((json) => {
        setMovies(json.results);
    });
}, []);

return (
    <div className="movie-grid">
    {movies.map((movie) => (
    <Link className="movie" key={movie.id} to={`/movie/${movie.id}`}>
        <img
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
            alt={movie.original_title}
        />
        <div className="details">
            <h2>
                {movie.original_title}
            </h2>
            <p>{movie.release_date}</p>
        </div>
        </Link>
    ))}
    </div>
);
};


