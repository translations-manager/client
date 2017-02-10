import React from 'react';

import TranslationsSearchContainer from '../containers/translationsSearchContainer';

import Breadcrumb from '../static/breadcrumb';

export default React.createClass({
    getInitialState() {
        return {
            project: null
        }
    },
    componentWillMount() {
        $.get(`${this.props.route.config.api}/projects/${this.props.params.id}`, (data) => {
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
                    <TranslationsSearchContainer project={this.state.project} api={this.props.route.config.api} />
                </div>
            ) : null
        );
    }
});
