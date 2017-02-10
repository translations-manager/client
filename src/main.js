import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import config from './config.json';

import App from './app';

import ProjectEditPage from './pages/projectEditPage';
import ProjectNewPage from './pages/projectNewPage';
import ProjectPage from './pages/projectPage';
import ProjectsPage from './pages/projectsPage';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={ProjectsPage} config={config} />
            <Route path="new-project" component={ProjectNewPage} config={config} />
            <Route path="edit-project/:id" component={ProjectEditPage} config={config} />
            <Route path="project/:id" component={ProjectPage} config={config} />
        </Route>
    </Router>
), document.getElementById('root'));
