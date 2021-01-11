import React, { ChangeEvent, useEffect } from 'react';

import Logo from '../../../components/Logo';
import CategorySelect from '../../../components/CategorySelect';
import FilterInput from '../../../components/LengthInput';
import CharactersTable from '../../../components/CharactersTable';

import { FilterContainer } from './styles';

interface CharacterFilterObject {
  characterInputName: string;
  characterPositionInputName: string;
  letter: string;
  position: string;
}

interface FilterProps {
  categorie: string;
  filters: {
    lettersFilter: string;
    lengthFilter: string;
    characters: CharacterFilterObject[];
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
  words: string[];
  setFilteredWords: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterSection: React.FC<FilterProps> = ({
  categorie,
  filters,
  setFilters,
  words,
  setFilteredWords,
}: FilterProps) => {
  function handleFilters(event: ChangeEvent<HTMLInputElement>): void {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    // Check if there is any filter
    const hasCharacterFilter =
      filters.characters.length !== 0 &&
      (filters.characters[0].letter !== '' ||
        filters.characters[0].position !== '');
    if (
      !filters.lengthFilter &&
      !filters.lettersFilter &&
      !hasCharacterFilter
    ) {
      setFilteredWords(words);
      return;
    }

    // Identify which filters are applied
    const length = Number(filters.lengthFilter);
    if (filters.lengthFilter && filters.lettersFilter) {
      const filtered = words.filter(
        word =>
          word.length === length &&
          word.toLowerCase().includes(filters.lettersFilter.toLowerCase()),
      );
      setFilteredWords(filtered);
    } else if (filters.lettersFilter) {
      const filtered = words.filter(word =>
        word.toLowerCase().includes(filters.lettersFilter.toLowerCase()),
      );
      setFilteredWords(filtered);
    } else if (hasCharacterFilter && filters.lengthFilter) {
      const filtered = words.filter(
        word =>
          word.length === length &&
          filters.characters.every(({ position, letter }) => {
            // If the character position isn't specified
            if (Number(position) <= 0)
              return word.includes(letter.toLowerCase());
            return word.charAt(Number(position) - 1) === letter.toLowerCase();
          }),
      );
      setFilteredWords(filtered);
    } else if (hasCharacterFilter) {
      const filtered = words.filter(word =>
        filters.characters.every(({ position, letter }) => {
          // If the character position isn't specified
          if (Number(position) <= 0) return word.includes(letter.toLowerCase());
          return word.charAt(Number(position) - 1) === letter.toLowerCase();
        }),
      );
      setFilteredWords(filtered);
    } else if (filters.lengthFilter) {
      const filtered = words.filter(word => word.length === length);
      setFilteredWords(filtered);
    }
  }, [filters, setFilteredWords, setFilters, words]);

  return (
    <FilterContainer>
      <Logo small />
      <CategorySelect categorie={categorie} />
      <FilterInput>
        Nº de Letras:
        <input
          type="number"
          name="lengthFilter"
          id="lengthFilter"
          min="0"
          value={filters.lengthFilter}
          onChange={handleFilters}
        />
      </FilterInput>
      <FilterInput>
        Letras:
        <input
          type="text"
          name="lettersFilter"
          id="lettersFilter"
          onChange={handleFilters}
          value={filters.lettersFilter}
        />
      </FilterInput>
      <CharactersTable filters={filters} setFilters={setFilters} />
    </FilterContainer>
  );
};

export default FilterSection;
