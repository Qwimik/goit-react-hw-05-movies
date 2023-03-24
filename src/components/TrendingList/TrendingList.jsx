import { Link, useLocation } from 'react-router-dom';

export default function TrendingList({ items }) {
  const location = useLocation();

  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title ?? item.name ?? item.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
