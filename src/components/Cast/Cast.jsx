import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NoResult } from 'components/Reviews/Reviews.styled';
import {
  CastList,
  CastPerson,
  CastTextContainer,
  CastName,
  CastDesr,
} from './Cast.styled';

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
  }, [id]);

  return (
    <div>
      {cast.length > 0 ? (
        <CastList>
          {cast.map(item => (
            <CastPerson key={item.cast_id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/original${item.profile_path}`
                    : `https://picsum.photos/200/300?random=${(count += 1)}`
                }
                alt={item.character ? item.character : item.original_name}
                width="150"
              />
              <CastTextContainer>
                <CastDesr>Name</CastDesr>
                <CastName>{item.name ?? item.original_name ?? 'Name'}</CastName>
                <CastDesr>Character</CastDesr>
                <CastName>
                  {item.character
                    ? item.character
                    : item.original_name ?? 'Character'}
                </CastName>
              </CastTextContainer>
            </CastPerson>
          ))}
        </CastList>
      ) : (
        <NoResult>No results</NoResult>
      )}
    </div>
  );
}
