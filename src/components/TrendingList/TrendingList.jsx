import { Link } from 'react-router-dom';

export default function TrendingList({ items }) {
  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <Link to={`movies/${item.id}`}>
              {item.name ?? item.original_title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
