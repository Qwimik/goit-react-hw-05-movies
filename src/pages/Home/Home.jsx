import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import TrendingList from 'components/TrendingList';
import * as API from 'services/api';

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

Home.propTypes = {
  trendingMovies: PropTypes.array,
};
