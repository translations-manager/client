import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
                <TextField
                    floatingLabelText="Username"
                    className="loginForm-action"
                    onChange={this.handleUsernameChange}
                />
                <TextField
                    floatingLabelText="Password"
                    className="loginForm-action"
                    onChange={this.handlePasswordChange}
                    type="password"
                />
                <RaisedButton className="loginForm-submit" label="Log me in" secondary={true} onClick={this.handleSubmit} />
            </form>
        );
    }
});
