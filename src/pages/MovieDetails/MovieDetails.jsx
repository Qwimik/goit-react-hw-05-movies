import { useEffect } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';

import * as API from 'services/api';
import { MovieContainer } from './MovieDetails.styled';

export default function MoviesDetails() {
  const [name, setName] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [userScore, setUserScore] = useState(null);
  const [overview, setOverview] = useState(null);
  const [genres, setGenres] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.searchMovieId(id);
        setName(res.title);
        setImgUrl(res.poster_path);
        setUserScore(res.vote_count);
        setOverview(res.overview);
        setGenres(res.genres.map(item => item.name).join(' '));
        console.log(res);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [id]);

  return (
    <>
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
        <p>movies details</p>
        <div>
          <Link to="cast">Cast</Link>
        </div>
        <div>
          <Link to="reviews">Reviews</Link>
        </div>
      </div>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
