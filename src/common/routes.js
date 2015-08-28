import { Route, DefaultRoute } from 'react-router';
import React from 'react';

import App from './components/AppController';
import Home from './components/HomeController';
import About from './components/AboutController';
import Project from './components/ProjectController';
import WorkIndex from './components/WorkIndexController';

export default (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" handler={About} />
    <Route name="work">
      <DefaultRoute name="work-index" handler={WorkIndex} />
      <Route name="project" handler={Project} path=":id" />
    </Route>
  </Route>
);
