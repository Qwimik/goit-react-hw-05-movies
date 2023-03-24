import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from 'services/api';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  let count = 0;

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.castMovie(id);
        setCast(res.cast);
        return;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                  : `https://picsum.photos/200/300?random=${(count += 1)}`
              }
              alt={item.character ? item.character : item.original_name}
              width="100"
            />
            <p>Name: {item.name ?? item.original_name}</p>
            <p>
              Character: {item.character ? item.character : item.original_name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
