import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render() {
        return (
            <ol className="breadcrumb">
                {this.props.links.map((link, i) => {
                    return link.path ? (
                        <li key={i}><Link to={link.path}>{link.name}</Link></li>
                    ) : (
                        <li key={i} className="active">{link.name}</li>
                    );
                })}
            </ol>
        );
    }
});
