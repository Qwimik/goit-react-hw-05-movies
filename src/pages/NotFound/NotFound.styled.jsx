import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
`;

export const ErrorText = styled.span`
  font-weight: 500;
  font-size: 36px;
`;

export const ErrorLink = styled(Link)`
  color: blue;
  transition: color 150ms ease-in-out;
  &:hover {
    color: orangered;
  }
`;
