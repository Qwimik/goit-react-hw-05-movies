import SearchMovie from 'components/SearchMovie';
import TrendingList from 'components/TrendingList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from 'services/api';

export default function Movies() {
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('title') ?? '';

  useEffect(() => {
    if (!movieTitle) return;
    fetch();
  }, []);

  useEffect(() => {
    if (movieTitle === '') {
      setSearchParams({});
    }
  }, [movieTitle]);

  const fetch = async () => {
    try {
      const res = await API.searchMovieTitle(movieTitle);
      setMovies(res.results);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!movieTitle.trim()) {
      alert('bad 404');
      return;
    }
    fetch();
    e.target.reset();
  };

  const onChange = e => {
    setTitle(e.target.value);
    const nextParams = e.target.value !== '' ? { title: e.target.value } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchMovie title={title} onChange={onChange} onSubmit={onSubmit} />
      <TrendingList items={movies} />
    </main>
  );
}
