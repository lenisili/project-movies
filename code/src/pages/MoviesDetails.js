import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MOVIE_URL } from "utils/urls";
import { Link } from "react-router-dom";

export const MoviesDetails = () => {
  const { movieId } = useParams();const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(MOVIE_URL(movieId))
    .then((res) => res.json())
    .then((data) => {
        setDetails(data);
    });
  }, [movieId]);

  return (
      <article className="background" style={{backgroundImage:`linear-gradient(rgba(0,0,0,0) 70%, rgb(0,0,0) 100%), url(https://image.tmdb.org/t/p/w1280/${details.backdrop_path})`}} key={details.id}>
        <Link className="backButton" to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd"></path></svg>Go back</Link>
          <div className="movieDetails">
            <img
              src={`https://image.tmdb.org/t/p/w780/${details.poster_path}`}
              alt={details.original_title}
            />
            <div className="text-details">
            <h1>{details.original_title} <span className="averageScore">{details.vote_average}/10</span></h1>
            <p>{details.overview}</p>
            </div>
          </div>
      </article>
  );
};
