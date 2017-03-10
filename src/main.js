import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './app';

import ProjectEditPage from './pages/projectEditPage';
import ProjectNewPage from './pages/projectNewPage';
import ProjectPage from './pages/projectPage';
import ProjectsPage from './pages/projectsPage';

ReactDOM.render((
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ProjectsPage} />
                <Route path="new-project" component={ProjectNewPage} />
                <Route path="edit-project/:id" component={ProjectEditPage} />
                <Route path="project/:id" component={ProjectPage} />
            </Route>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'));
