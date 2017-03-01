import React from 'react';

import LoginForm from '../static/loginForm';

import Client from '../client';

export default React.createClass({
    getInitialState() {
        return {
            loggedIn: false
        }
    },
    componentDidMount() {
        if (localStorage.getItem('authToken')) {
            this.handleSubmit({});
        }
    },
    handleSubmit(values) {
        Client.ajax({
            url: `login`,
            type: 'POST',
            data: values
        }).done((data) => {
            localStorage.setItem('authToken', data.token);
            this.setState({'loggedIn': true});
            this.props.onLoggedIn(data.token);
        }).fail(() => {
            localStorage.removeItem('authToken');
        });
    },
    render() {
        if (!this.state.loggedIn) {
            return (
                <div className="loginContainer">
                    <LoginForm onSubmit={this.handleSubmit} />
                </div>
            );
        }

        return null;
    }
});
