import React from 'react';

import StyledLogo from './styles';

interface LogoProps {
  small?: boolean;
}

const Logo: React.FC<LogoProps> = ({ small }: LogoProps) => (
  <StyledLogo to="/" small={small}>
    Gartic Helper
  </StyledLogo>
);

export default Logo;
