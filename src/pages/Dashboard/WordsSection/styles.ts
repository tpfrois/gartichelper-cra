import styled from 'styled-components';

export const WordsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    a {
      margin: 5px 5px 5px 0px;
    }
  }
`;
