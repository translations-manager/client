import React from 'react';
import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import LoginContainer from './containers/loginContainer';

export default React.createClass({
    getInitialState() {
        return {
            loggedIn: false
        };
    },
    handleLoggedIn() {
        this.setState({loggedIn: true});
    },
    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('authToken');
        this.setState({loggedIn: false});
    },
    render() {
        return (
            <div className="container">
                <AppBar
                    className="appBar"
                    title={<Link to="/">
                        Translations Manager
                    </Link>}
                    iconElementRight={this.state.loggedIn ? <FlatButton><a href="#" onClick={this.logOut}>Log out</a></FlatButton> : null}
                />
                {this.state.loggedIn ? this.props.children : <LoginContainer onLoggedIn={this.handleLoggedIn} />}
            </div>
        )
    }
});
