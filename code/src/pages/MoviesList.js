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
    <div>
    {movies.map((movie) => (
        <div key={movie.id}>
        <img
            src={`https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`}
            alt={movie.original_title}
        />
        <div className="details">
            <h2>
                <Link to={`/movie/${movie.id}`}>
                {movie.original_title}
                </Link>
            </h2>
            <p>{movie.release_date}</p>
        </div>
        </div>
    ))}
    </div>
);
};


