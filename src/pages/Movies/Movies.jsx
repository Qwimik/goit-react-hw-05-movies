import SearchMovie from 'components/SearchMovie';
import TrendingList from 'components/TrendingList';
import { Container } from 'components/App/App.styled';

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
    const fetch = async () => {
      try {
        const res = await API.searchMovieTitle(movieTitle);
        setMovies(res.results);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [movieTitle]);

  const onSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      alert('bad 404');
      return;
    }
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
    setTitle('');
  };

  const onChange = e => {
    setTitle(e.target.value);
  };

  return (
    <main>
      <Container>
        <SearchMovie title={title} onChange={onChange} onSubmit={onSubmit} />
        <TrendingList items={movies} />
      </Container>
    </main>
  );
}
