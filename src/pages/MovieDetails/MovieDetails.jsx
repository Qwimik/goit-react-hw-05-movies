import { useState, useMemo } from 'react';
import { Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';

import { MdOutlineArrowBackIosNew, MdOutlineReviews } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

import { Container } from 'components/App/App.styled';
import Loading from 'components/Loading';
import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetailsComponent';
import {
  BackLink,
  Icon,
  LinksWrapper,
  LinkMore,
  ErrorText,
} from './MoviesDetails.styled';

import * as API from 'services/api';

export default function MoviesDetails() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState('');

  const { id } = useParams();

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useMemo(() => {
    const fetch = async () => {
      try {
        const res = await API.searchMovieId(id);
        setData(res);
        setStatus(res.status);
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

        {status === 'Released' ? (
          <>
            <MovieDetailsComponent data={data} />
            <hr />
            <LinksWrapper>
              <LinkMore to="cast" state={{ from: backLink }}>
                <Icon>
                  <BsFillPeopleFill />
                </Icon>
                Cast
              </LinkMore>
              <LinkMore to="reviews" state={{ from: backLink }}>
                <Icon>
                  <MdOutlineReviews />
                </Icon>
                Reviews
              </LinkMore>
            </LinksWrapper>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </>
        ) : (
          <ErrorText>
            Oops, page Not Found :( Please go back and try again later...
          </ErrorText>
        )}
      </Container>
    </main>
  );
}
