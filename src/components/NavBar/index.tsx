import React from 'react';
import { Link } from 'react-router-dom';

import { FaGithub, FaQuestionCircle, FaHome } from 'react-icons/fa';
import { Header } from './styles';

const NavBar: React.FC = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FaHome size={26} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/help">
              <FaQuestionCircle size={26} />
              <span>Como usar?</span>
            </Link>
          </li>
          <li>
            <a
              href="https://www.github.com/tpfrois/gartichelper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={26} />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default NavBar;
