import React from 'react';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';

import Home from '../scenes/Home/index';
import VenuesListScene from '../scenes/VenuesList/index';
import TipsScene from '../scenes/TipsScene/index';
import NotFoundScene from '../scenes/NotFoundScene/index';

const AppRouter = () => (
  <Router history = {browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/ll/:ll/venues' component={VenuesListScene} />
    <Route path='/venues/:venueId/tips' component={TipsScene} />
    <Route path="*" component={NotFoundScene}/>
  </Router>
);

export default AppRouter;
