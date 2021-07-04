import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Layout/Home';
import News from './Layout/News';
import NotFound from './Http/NotFound';
import Team from '../src/components/Team';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/news' component={News} />
      {/* 
      <Route exact path='/projects/' component={} />
      <Route exact path='/about/' component={} /> */}
       <Route exact path='/people/' component={Team} />
      <Route path="" component={NotFound} />
    </Switch>
  </div>
);

export default BaseRouter;
