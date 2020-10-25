import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import TeamConfiguration from '../pages/TeamConfiguration/TeamConfiguration';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team" component={TeamConfiguration} />
  </Switch>
);

export default Routes;
