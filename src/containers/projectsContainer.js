import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

import Client from '../client';

import ConfirmPopin from '../static/confirmPopin';
import Loader from '../static/loader';
import ProjectPresentation from '../static/projectPresentation';

export default React.createClass({
    getInitialState() {
        return {
            projects: [],
            toRemove: null,
            loaded: false
        };
    },
    componentWillMount() {
        Client.ajax({
            type: 'GET',
            url: 'projects'
        }).done((data) => {
            this.setState({projects: data, loaded: true});
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
        return this.state.loaded ? (
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
                    <RaisedButton label={<Link to="new-project">New project</Link>} secondary={true} />
                </div>
            </div>
        ) : (<Loader />);
    }
});
