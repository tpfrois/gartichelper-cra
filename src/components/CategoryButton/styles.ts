import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  min-height: 50px;
  min-width: 280px;
  margin-bottom: 25px;
  padding: 0 15px;

  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);

  background-color: #fff;
  color: #007af8;
  font-size: 24px;
  font-weight: bold;

  text-decoration: none;

  cursor: pointer;

  display: flex;
  align-items: center;

  transition: all 0.2s;

  &:hover {
    background-color: #ffbf00;
    color: white;
  }

  img {
    width: 32px;
    margin-right: 10px;
  }

  p {
    text-align: center;
    flex: 1;
  }
`;
