import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Layout/Home';
import News from './Layout/News';

const BaseRouter = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/news/' component={News} />
      {/* 
      <Route exact path='/projects/' component={} />
      <Route exact path='/people/' component={} />
      <Route exact path='/about/' component={} /> */}
    </Switch>
  </div>
);

export default BaseRouter;
