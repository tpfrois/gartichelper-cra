import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import GlobalStyle from '../../styles/global';

import background from '../../assets/images/dashboard-background.png';

import { Container } from './styles';

import wordsRepository from '../../database/words';
import FiltersSection from './FiltersSection';
import WordsSection from './WordsSection';

interface DashboardParams {
  category: string;
}

const Dashboard: React.FC = () => {
  const { params } = useRouteMatch<DashboardParams>();
  const currentCategory = params.category;

  const [words, setWords] = useState<string[]>([]);
  const [filteredWords, setFilteredWords] = useState<string[]>([]);

  useEffect(() => {
    const categoryData = wordsRepository.find(
      categorie =>
        categorie.name.toLowerCase() === currentCategory.toLowerCase(),
    );

    if (!categoryData) return;

    const sortedWords = categoryData.words.sort();

    setWords(sortedWords);
    setFilteredWords(sortedWords);
  }, [currentCategory]);

  return (
    <>
      <GlobalStyle backgroundImage={background} />
      <Container>
        <FiltersSection
          categorie={currentCategory}
          words={words}
          setFilteredWords={setFilteredWords}
        />
        <WordsSection words={filteredWords} />
      </Container>
    </>
  );
};

export default Dashboard;
