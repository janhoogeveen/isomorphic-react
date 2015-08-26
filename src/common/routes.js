import { Route, DefaultRoute } from 'react-router';  
import React from 'react';

import AppController from './components/AppController';
import HomeController from './components/HomeController';
import LoginHandler from './components/LoginHandler';

export default (  
  <Route handler={AppController}>
  	<DefaultRoute handler={HomeController} />
  	<Route name="login" handler={LoginHandler} path="/login" />
  </Route>
);
