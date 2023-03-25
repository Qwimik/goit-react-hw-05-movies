import { useLocation } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
import {
  MoviesList,
  Movie,
  LinkMovie,
  MovieWrapper,
  Text,
} from './TrendingList.styled';

export default function TrendingList({ items }) {
  const location = useLocation();
  let count = 0;

  return (
    <Container>
      <MoviesList>
        {items.map(item => {
          return (
            <Movie key={item.id}>
              <LinkMovie to={`/movies/${item.id}`} state={{ from: location }}>
                <MovieWrapper>
                  <div>
                    <img
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                          : `https://picsum.photos/200/300?random=${(count += 1)}`
                      }
                      alt={item.title ?? item.name ?? item.original_title}
                      width="200"
                    />
                  </div>
                  <Text>{item.title ?? item.name ?? item.original_title}</Text>
                </MovieWrapper>
              </LinkMovie>
            </Movie>
          );
        })}
      </MoviesList>
    </Container>
  );
}
