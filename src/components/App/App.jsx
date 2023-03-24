import { Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from '../SharedLayout/SharedLayout';

const Home = lazy(() => import('../../pages/Home'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <div>
            <Link to="/">back</Link>
            <p>-----Error 404-----</p>
          </div>
        }
      />
    </Routes>
  );
}
