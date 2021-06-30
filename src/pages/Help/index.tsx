import React from 'react';
import background from '../../assets/images/home-background.png';

import GlobalStyle from '../../styles/global';
import { Container, CardContainer, Card } from './styles';

import FiltroCategoria from '../../assets/images/filtro-categoria.png';
import FiltroNumero from '../../assets/images/filtro-numero.png';
import FiltroLetras from '../../assets/images/filtro-letras.png';
import DicaNumeros from '../../assets/images/dica-numeros.png';
import DicaLetras from '../../assets/images/dica-letras.png';
import FiltroCaracteres from '../../assets/images/filtro-caracteres.png';
import DicaCaracteres from '../../assets/images/dica-caracteres.png';

const Help: React.FC = () => {
  return (
    <>
      <GlobalStyle homePage backgroundImage={background} />
      <Container>
        <h1>Como usar o Gartic Helper?</h1>
        <CardContainer>
          <Card>
            <h2>Categoria</h2>
            <img src={FiltroCategoria} alt="Filtro de Categoria" />
            <p>
              Selecione a categoria de palavras que você está jogando. Colocando
              apenas a categoria, você tem acesso a todas as palavras da mesma,
              mas caso uma dica for dada no seu jogo, é recomendável que você
              combine com outros filtros para obter a resposta rapidamente.
              Todas as palavras estão ordenadas em ordem alfabética e basta
              clicar nelas para copiar.
            </p>
          </Card>
          <Card>
            <h2>Nº de Letras</h2>
            <img src={DicaNumeros} className="dica" alt="Dica do Gartic" />
            <img src={FiltroNumero} alt="Filtro de Quantidade de Letras" />
            <p>
              Insira a quantidade de letras da palvra{' '}
              <strong>(contando com hífens e espaços)</strong>. Geralmente é
              utilizada sempre que uma dica é dada no seu jogo.
            </p>
          </Card>
          <Card>
            <h2>Letras</h2>
            <p>Insira uma sequência de letras a ser procurada nas palavras.</p>
            <img src={DicaLetras} className="dica" alt="Dica do Gartic" />
            <img src={FiltroLetras} alt="Filtro de Quantidade de Letras" />
            <p>
              No exemplo acima, temos a sequência <strong>TA</strong>, então
              podemos coloca-la no filtro e combinar com o de número de letras e
              caracteres para achar facilmente a resposta.
            </p>
          </Card>
          <Card>
            <h2>Caracteres</h2>
            <img src={DicaCaracteres} className="dica" alt="Dica do Gartic" />
            <img src={FiltroCaracteres} alt="Filtro de Caracteres" />
            <p>
              Este é o filtro mais poderoso, com ele você pode colocar as letras
              da palavra e especificar a sua posição (lembre-se de contar os
              hífens e espaços!). Muito útil quando temos uma dica com letras
              separadas.
            </p>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
};

export default Help;
