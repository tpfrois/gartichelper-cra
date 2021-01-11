import React, { memo } from 'react';

import { WordsContainer } from './styles';

import WordButton from '../../../components/WordButton';

interface WordSectionProps {
  words: string[];
}

const WordsSection: React.FC<WordSectionProps> = ({
  words,
}: WordSectionProps) => {
  return (
    <main>
      <p>
        <i className="fas fa-info-circle" />
        Clique na palavra para copiar, elas estão ordenadas em ordem alfabética!
      </p>
      <p>
        Palavras Encontradas:
        {words.length}
      </p>
      <WordsContainer>
        {words.map(word => (
          <WordButton key={`${word}`} word={word} />
        ))}
      </WordsContainer>
    </main>
  );
};

export default memo(WordsSection);
