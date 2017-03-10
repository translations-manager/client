import React from 'react';

import ProjectsContainer from '../containers/projectsContainer';

import Breadcrumb from '../static/breadcrumb';

export default React.createClass({
    render() {
        return (
            <div className="page projectsPage">
                <h1>List of projects</h1>
                <ProjectsContainer />
            </div>
        );
    }
});
