import { useEffect } from 'react';
import { useState } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
import { MdOutlineArrowBackIosNew, MdOutlineReviews } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import {
  BackLink,
  Icon,
  ContentWrapper,
  ImgThumb,
  Title,
  LinksWrapper,
  LinkMore,
} from './MoviesDetails.styled';

import * as API from 'services/api';
import Loading from 'components/Loading';

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
      <Container>
        <BackLink to={backLink}>
          <Icon>
            <MdOutlineArrowBackIosNew />
          </Icon>
          <span>Back to Movies</span>
        </BackLink>
        <ContentWrapper>
          <ImgThumb>
            <img
              src={
                imgUrl
                  ? `https://image.tmdb.org/t/p/original${imgUrl}`
                  : 'https://picsum.photos/300/450?random=1'
              }
              alt={name}
              width="300"
              height="450"
              loading="lazy"
            />
          </ImgThumb>
          <div>
            <Title>{name ?? 'Name'}</Title>
            <p>User Score: {userScore ?? 0}%</p>
            <h3>Overview</h3>
            <p>{overview ?? 'Overview'}</p>
            <h3>Genres</h3>
            <p>{genres ?? 'Genres'}</p>
          </div>
        </ContentWrapper>
        <hr />
        <LinksWrapper>
          <div>
            <LinkMore to="cast" state={{ from: backLink }}>
              <Icon>
                <BsFillPeopleFill />
              </Icon>
              Cast
            </LinkMore>
          </div>
          <div>
            <LinkMore to="reviews" state={{ from: backLink }}>
              <Icon>
                <MdOutlineReviews />
              </Icon>
              Reviews
            </LinkMore>
          </div>
        </LinksWrapper>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
}
