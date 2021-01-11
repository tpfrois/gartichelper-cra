import React, { ChangeEvent } from 'react';

import { Table } from './styles';

interface CharacterFilterObject {
  characterInputName: string;
  characterPositionInputName: string;
  letter: string;
  position: string;
}
interface CharactersTableProps {
  filters: {
    lettersFilter: string;
    lengthFilter: string;
    characters: CharacterFilterObject[];
  };
  setFilters: React.Dispatch<React.SetStateAction<any>>;
}

const CharactersTable: React.FC<CharactersTableProps> = ({
  filters,
  setFilters,
}: CharactersTableProps) => {
  function handleCharacterFilter(
    event:
      | ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void {
    const targetName = event.currentTarget.name;
    const targetValue = event.currentTarget.value;

    if (targetName === 'addButton') {
      const charactersIndex = filters.characters.length;
      const newCharacter = {
        characterInputName: `text-${charactersIndex}`,
        characterPositionInputName: `number-${charactersIndex}`,
        letter: '',
        position: '',
      };
      const newFilters = { ...filters };
      newFilters.characters.push(newCharacter);
      setFilters(newFilters);
    }

    if (targetName === 'cleanButton') {
      setFilters({
        ...filters,
        characters: [],
      });
    }

    if (
      event.currentTarget.type === 'text' ||
      event.currentTarget.type === 'number'
    ) {
      const newCharacters = filters.characters.map(character => {
        if (character.characterInputName === targetName) {
          return {
            ...character,
            letter: targetValue,
          };
        }
        if (character.characterPositionInputName === targetName) {
          return { ...character, position: targetValue };
        }
        return character;
      });
      setFilters({ ...filters, characters: newCharacters });
    }
  }

  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>Letras</th>
        </tr>
        <tr>
          <th>Letras</th>
          <th>Posição</th>
        </tr>
      </thead>
      <tbody>
        {filters.characters.map((character, index) => (
          <tr key={character.characterInputName}>
            <td>
              <input
                type="text"
                placeholder="..."
                name={`text-${index}`}
                onChange={handleCharacterFilter}
              />
            </td>
            <td>
              <input
                type="number"
                min="1"
                placeholder="..."
                name={`number-${index}`}
                onChange={handleCharacterFilter}
              />
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <button
              type="button"
              id="cleanButton"
              onClick={handleCharacterFilter}
              name="cleanButton"
            >
              LIMPAR
            </button>
          </td>
          <td>
            <button
              type="button"
              id="addButton"
              onClick={handleCharacterFilter}
              name="addButton"
            >
              ADICIONAR
            </button>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
};

export default CharactersTable;
