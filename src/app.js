import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
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
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
});
