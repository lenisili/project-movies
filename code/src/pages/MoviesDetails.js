import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOVIE_URL } from "utils/urls";
import { Link } from "react-router-dom";

export const MoviesDetails = ({ movies, setMovies }) => {
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL(movieId))
    .then((res) => res.json())
    .then((data) => {
        setDetails(data);
    });
  }, [movieId]);

  return (
    <div>
      <article key={details.id}>
        <Link to="/">Go back</Link>
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w342/${details.backdrop_path}`}
              alt={details.original_title}
            />
            <h1>{details.original_title}</h1>
            <p>{details.overview}</p>
            <p>{details.vote_average}/10</p>
          </div>
        </div>
      </article>
    </div>
  );
};
