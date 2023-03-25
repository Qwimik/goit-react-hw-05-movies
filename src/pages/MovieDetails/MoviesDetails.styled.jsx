import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 5px 10px 5px 30px;
  margin: 15px 0;
  background-color: #f8f8f8;
  border-radius: 10px;
  color: #242424;
  box-shadow: 0px 0px 3px #242424;
  transition: color 250ms ease-in-out, box-shadow 250ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 4px #242424, inset 0px 0px 15px 5px #fff;
    color: orangered;
  }
`;

export const Icon = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, 35%);
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const ImgThumb = styled.div`
  border-radius: 10px;
  overflow: hidden;
  flex: 1 0 auto;
  box-shadow: 0px 0px 4px #242424;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 36px;
  text-align: center;
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 30px 0;
`;

export const LinkMore = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: 16px;
  padding: 5px 10px 5px 30px;
  background-color: #f8f8f8;
  border-radius: 10px;
  color: #242424;
  box-shadow: 0px 0px 3px #242424;
  transition: color 250ms ease-in-out, box-shadow 250ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 4px #242424, inset 0px 0px 15px 5px #fff;
    color: orangered;
  }
`;
