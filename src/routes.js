import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Layout/Home';
import News from './Layout/News';
import NotFound from './Http/NotFound';
import Team from './components/Team';
import About from './components/About';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/news' component={News} />
      {/* 
      <Route exact path='/projects/' component={} /> */}
      <Route exact path='/about/' component={About} />
      <Route exact path='/people/' component={Team} />
      <Route path="" component={NotFound} />
    </Switch>
  </div>
);

export default BaseRouter;
