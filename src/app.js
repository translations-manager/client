import React from 'react';
import { Link } from 'react-router';

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
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">
                                Translations Manager
                            </Link>
                        </div>
                        {this.state.loggedIn ? (
                            <ul className="nav navbar-nav navbar-right">
                                <li>
                                    <a href="#" onClick={this.logOut}>Log out</a>
                                </li>
                            </ul>
                        ) : null}
                    </div>
                </nav>
                {this.state.loggedIn ? this.props.children : <LoginContainer onLoggedIn={this.handleLoggedIn} />}
            </div>
        )
    }
});
