import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Analytics id="G-8W2B7M8DFD">
        <Routes />
      </Analytics>
    </BrowserRouter>
  </>
);

export default App;
