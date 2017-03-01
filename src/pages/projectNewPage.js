import React from 'react';
import { Link } from 'react-router';

import AlertPopin from '../static/alertPopin';
import Breadcrumb from '../static/breadcrumb';
import ProjectEditForm from '../static/projectEditForm';

import Client from '../client';

export default React.createClass({
    getInitialState() {
        return {
            project: {
                name: '',
                domains: [],
                file_locations: [],
                locales: [],

            },
            message: null,
            created: false
        };
    },
    clearMessage() {
        this.setState({message: null});
    },
    handleSubmit(project) {
        Client.ajax({
            url: `projects`,
            type: 'POST',
            data: project
        }).done((data) => {
            this.setState({project: data, message: 'The project has been created', created: true});
        });
    },
    render() {
        return (
            <div className="newProjectPage">
                {this.state.message ? <AlertPopin message={this.state.message} onClose={this.clearMessage} /> : null}
                <Breadcrumb links={[
                    {
                        path: '/',
                        name: 'Projects'
                    },
                    {
                        path: null,
                        name: `New project`
                    }
                ]} />
                <h1>New project</h1>
                {this.state.created && !this.state.message ? (
                    <Link to="/">Back to projects page</Link>
                ) : (
                    <ProjectEditForm project={this.state.project} onSubmit={this.handleSubmit} />
                )}
            </div>
        );
    }
});
