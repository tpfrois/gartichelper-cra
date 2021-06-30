import React from 'react';

import { StyledBody, InfoContainer, CategoryContainer, Label } from './styles';

import GlobalStyle from '../../styles/global';

import background from '../../assets/images/home-background.png';
import Logo from '../../components/Logo';
import CategoryButton from '../../components/CategoryButton';
import NavBar from '../../components/NavBar';

import categories from '../../database/words';

const Home: React.FC = () => (
  <>
    <GlobalStyle homePage backgroundImage={background} />
    <StyledBody>
      <NavBar />
      <InfoContainer>
        <Logo />
        <p>
          Uma ajudinha para você mandar ver na sua partida de Gartic com os
          amigos!
        </p>
      </InfoContainer>
      <div>
        <Label>Escolha uma Categoria</Label>
        <CategoryContainer>
          {categories.map(({ icon, name }) => (
            <CategoryButton key={name} id={name} icon={icon} category={name} />
          ))}
        </CategoryContainer>
      </div>
    </StyledBody>
  </>
);

export default Home;
