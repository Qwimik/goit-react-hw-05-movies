import { Wrapper, ErrorText, ErrorLink } from './NotFound.styled';

export default function NotFound() {
  return (
    <Wrapper>
      <ErrorText>
        Oops, page Not Found, <ErrorLink to="/">&gt;click here&lt;</ErrorLink>{' '}
        to return.{' '}
      </ErrorText>
    </Wrapper>
  );
}
