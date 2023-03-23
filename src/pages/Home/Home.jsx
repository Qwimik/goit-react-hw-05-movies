import { useEffect } from 'react';

import TrendingList from 'components/TrendingList';
import * as API from 'services/api';
import { useState } from 'react';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.searchTrending();
        setTrendingMovies(res.results);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <TrendingList items={trendingMovies} />
    </>
  );
}
