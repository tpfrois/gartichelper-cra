import React, { ChangeEvent, useCallback, useEffect } from 'react';

import Logo from '../../../components/Logo';
import CategorySelect from '../../../components/CategorySelect';
import FilterInput from '../../../components/LengthInput';
import CharactersTable from '../../../components/CharactersTable';

import { FilterContainer } from './styles';

interface CharacterFilterObject {
  id: string;
  letter: string;
  position: string;
}

interface Filters {
  lettersFilter: string;
  lengthFilter: string;
  characters: CharacterFilterObject[];
}

interface FilterProps {
  categorie: string;
  filters: Filters;
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
  const handleFilters = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setFilters({ ...filters, [event.target.name]: event.target.value });
    },
    [filters, setFilters],
  );

  const filtersFunctions = {
    lettersFilter: (wordsArray: string[]) =>
      wordsArray.filter(word =>
        word.toLowerCase().includes(filters.lettersFilter.toLowerCase()),
      ),

    lengthFilter: (wordsArray: string[]) =>
      wordsArray.filter(word => word.length === Number(filters.lengthFilter)),

    characters: (wordsArray: string[]) =>
      wordsArray.filter(word =>
        filters.characters.every(({ position, letter }) => {
          // If the character position isn't specified
          if (Number(position) <= 0) return word.includes(letter.toLowerCase());
          return word.charAt(Number(position) - 1) === letter.toLowerCase();
        }),
      ),
  };

  const getAppliedFilters = useCallback((filtersObject: Filters): string[] => {
    const objectProperties = Object.entries(filtersObject);
    const activeFilters = objectProperties.filter(filter => {
      const value = filter[1];
      if (typeof value === 'object') {
        // Checks if any character input is filled
        return value.some(character => character.letter !== '');
      }
      return value !== '';
    });
    const activeFiltersNames = activeFilters.map(filter => filter[0]);
    return activeFiltersNames;
  }, []);

  useEffect(() => {
    const appliedFilters = getAppliedFilters(filters);

    const filteredWords = appliedFilters.reduce(
      (currentFilteredWords, filter) =>
        filtersFunctions[filter](currentFilteredWords),
      words,
    );
    setFilteredWords(filteredWords);
  }, [filters, setFilteredWords, words, getAppliedFilters]);

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
