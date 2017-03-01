import React from 'react';

import TranslationsSearchContainer from '../containers/translationsSearchContainer';

import Breadcrumb from '../static/breadcrumb';

import Client from '../client';

export default React.createClass({
    getInitialState() {
        return {
            project: null
        }
    },
    componentWillMount() {
        Client.ajax({
            type: 'GET',
            url: `projects/${this.props.params.id}`
        }).done((data) => {
            this.setState({project: data});
        });
    },
    render() {
        return (
            this.state.project ? (
                <div className="projectPage">
                    <Breadcrumb links={[
                        {
                            path: '/',
                            name: 'Projects'
                        },
                        {
                            path: null,
                            name: this.state.project.name
                        }
                    ]} />
                    <h1>{this.state.project.name}</h1>
                    <TranslationsSearchContainer project={this.state.project} />
                </div>
            ) : null
        );
    }
});
