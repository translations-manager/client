import React from 'react';

import ProjectsContainer from '../containers/projectsContainer';

import Breadcrumb from '../static/breadcrumb';

export default React.createClass({
    render() {
        return (
            <div className="projectsPage">
                <Breadcrumb links={[
                    {
                        path: null,
                        name: 'Projects'
                    }
                ]} />
                <h1>List of projects</h1>
                <ProjectsContainer api={this.props.route.config.api} />
            </div>
        );
    }
});
