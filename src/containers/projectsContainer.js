import React from 'react';
import { Link } from 'react-router';

import Client from '../client';

import ConfirmPopin from '../static/confirmPopin';
import ProjectPresentation from '../static/projectPresentation';

export default React.createClass({
    getInitialState() {
        return {
            projects: [],
            toRemove: null
        };
    },
    componentWillMount() {
        Client.ajax({
            type: 'GET',
            url: 'projects'
        }).done((data) => {
            this.setState({projects: data});
        });
    },
    askForRemoval(project) {
        this.setState({toRemove: project});
    },
    okForRemoval() {
        Client.ajax({
            url: `projects/${this.state.toRemove.id}`,
            type: 'DELETE'
        }).done(() => {
            Client.ajax({
                type: 'GET',
                url: 'projects'
            }).done((data) => {
                this.setState({projects: data, toRemove: null});
            });
        });
    },
    cancelRemoval() {
        this.setState({toRemove: null});
    },
    render() {
        return (
            <div className="projectsContainer">
                {this.state.toRemove ? (
                    <ConfirmPopin
                        message={`Really delete project ${this.state.toRemove.name} ?`}
                        onOk={this.okForRemoval}
                        onCancel={this.cancelRemoval}
                    />
                ) : null}
                <div className="projectsContainer-presentationsWrapper">
                {
                    this.state.projects.map((project, id) => {
                        return (
                            <ProjectPresentation
                                onProjectRemove={this.askForRemoval}
                                key={id}
                                project={project}
                            />
                        );
                    })

                }
                </div>
                <div className="projectsContainer-actions">
                    <Link className="btn btn-primary" to="new-project">New project</Link>
                </div>
            </div>
        );
    }
});
