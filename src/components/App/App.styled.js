import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1140px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
