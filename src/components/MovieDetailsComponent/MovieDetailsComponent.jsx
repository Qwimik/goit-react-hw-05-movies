import {
  ContentWrapper,
  ImgThumb,
  Title,
} from 'pages/MovieDetails/MoviesDetails.styled';
import PropTypes from 'prop-types';

export default function MovieDetailsComponent({ data }) {
  if (data) {
    return (
      <ContentWrapper>
        <ImgThumb>
          <img
            src={
              data.poster_path
                ? `https://image.tmdb.org/t/p/original${data.poster_path}`
                : 'https://picsum.photos/300/450?random=1'
            }
            alt={data.title}
            width="300"
            height="450"
            loading="lazy"
          />
        </ImgThumb>
        <div>
          <Title>{data.title ?? 'Name'}</Title>
          <p>Release date {data.release_date}</p>
          <p>User Score: {Math.round(data.vote_average * 10) ?? 0}%</p>
          <h3>Overview</h3>
          <p>{data.overview ?? 'Overview'}</p>
          <h3>Genres</h3>
          <p>{data.genres.map(item => item.name).join(' ') ?? 'Genres'}</p>
        </div>
      </ContentWrapper>
    );
  }
}

MovieDetailsComponent.propTypes = {
  data: PropTypes.object.isRequired,
};
