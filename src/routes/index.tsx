import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Help from '../pages/Help';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/categories/:category" component={Dashboard} />
    <Route path="/help" component={Help} />
  </Switch>
);

export default Routes;
