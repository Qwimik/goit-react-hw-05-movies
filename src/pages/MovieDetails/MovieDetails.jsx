import { useEffect } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';

import * as API from 'services/api';
import { MovieContainer } from './MovieDetails.styled';

export default function MoviesDetails({ movieTitle }) {
  const [name, setName] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [overview, setOverview] = useState(null);
  const [genres, setGenres] = useState(null);

  const { id } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.searchMovieId(id);
        setName(res.title);
        setImgUrl(res.poster_path);
        setUserScore(Math.round(res.vote_average * 10));
        setOverview(res.overview);
        setGenres(res.genres.map(item => item.name).join(' '));
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <main>
      <Link to={backLink}>Back to Movies</Link>
      <MovieContainer>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${imgUrl}`}
            alt={name}
            width="200"
            height="300"
          />
        </div>
        <div>
          <h2>{name ?? 'Name'}</h2>
          <p>User Score: {userScore ?? 0}%</p>
          <h3>Overview</h3>
          <p>{overview ?? 'Overview'}</p>
          <h3>Genres</h3>
          <p>{genres ?? 'Genres'}</p>
        </div>
      </MovieContainer>
      <hr />
      <div>
        <div>
          <Link to="cast" state={{ from: backLink }}>
            Cast
          </Link>
        </div>
        <div>
          <Link to="reviews" state={{ from: backLink }}>
            Reviews
          </Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
