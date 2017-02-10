import React from 'react';
import $ from 'jquery';

import AlertPopin from '../static/alertPopin';
import Breadcrumb from '../static/breadcrumb';
import ProjectEditForm from '../static/projectEditForm';

export default React.createClass({
    getInitialState() {
        return {project: null, message: null};
    },
    componentDidMount() {
        $.get(`${this.props.route.config.api}/projects/${this.props.params.id}`, (data) => {
            this.setState({project: data});
        });
    },
    clearMessage() {
        this.setState({message: null});
    },
    handleSubmit(project) {
        $.ajax({
            url: `${this.props.route.config.api}/projects/${this.props.params.id}`,
            type: 'PUT',
            data: project
        }).done((data) => {
            this.setState({project: data, message: 'The project has been updated'});
        });
    },
    render() {
        if (!this.state.project && !this.state.message) {
            return null;
        }
        return (
            <div className="editProjectPage">
                {this.state.message ? <AlertPopin message={this.state.message} onClose={this.clearMessage} /> : null}
                <Breadcrumb links={[
                    {
                        path: '/',
                        name: 'Projects'
                    },
                    {
                        path: null,
                        name: `Edit project ${this.state.project.name}`
                    }
                ]} />
                <h1>Edit project {this.state.project.name}</h1>
                <ProjectEditForm project={this.state.project} onSubmit={this.handleSubmit} />
            </div>
        );
    }
});
