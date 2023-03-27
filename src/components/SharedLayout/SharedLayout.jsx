import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavWrapper, Nav, Title, Link } from './SharedLayout.styled';
import { Container } from 'components/App/App.styled';
import { SiThemoviedatabase } from 'react-icons/si';
import { IconContext } from 'react-icons';
import Loading from 'components/Loading';

export default function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <NavWrapper>
            <Link to="/">
              <IconContext.Provider
                value={{ size: '50px', color: 'orangered' }}
              >
                <div>
                  <SiThemoviedatabase />
                </div>
              </IconContext.Provider>
            </Link>
            <div>
              <Title>Movie - DataBase</Title>
            </div>
            <Nav>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </Nav>
          </NavWrapper>
        </Container>
      </Header>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
}
