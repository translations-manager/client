import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            username: '',
            password: ''
        }
    },
    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    },
    handlePasswordChange(e) {
        this.setState({password: e.target.value});
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },
    render() {
        return (
            <form className="loginForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="loginForm-username form-control"
                    onChange={this.handleUsernameChange}
                    placeholder="Username"
                />
                <input
                    type="password"
                    className="loginForm-password form-control"
                    onChange={this.handlePasswordChange}
                    placeholder="Password"
                />
                <input type="submit" className="btn btn-default" />
            </form>
        );
    }
});
