import React from 'react';

import { Button } from './styles';

interface CategoryButtonProps {
  icon: string;
  category: string;
  id: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  icon,
  category,
}: CategoryButtonProps) => {
  return (
    <Button to={`/${category}`} id={category}>
      <img src={icon} alt={category} />
      <p>{category}</p>
    </Button>
  );
};

export default CategoryButton;
