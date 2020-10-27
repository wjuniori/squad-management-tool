import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import TeamConfiguration from '../pages/TeamConfiguration/TeamConfiguration';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/team" component={TeamConfiguration} />
  </Switch>
);

export default Routes;
