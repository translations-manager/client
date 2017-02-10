import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    onProjectSelect() {
        this.props.onProjectSelect(this.props.project);
    },
    onProjectRemove(e) {
        e.preventDefault();
        this.props.onProjectRemove(this.props.project);
    },
    render() {
        return (
            <div className="projectPresentation col-md-4">
                <Link to={`project/${this.props.project.id}`} className="projectPresentation-project well-lg" onClick={this.onProjectSelect}>
                    {this.props.project.name}
                </Link>
                <Link className="projectPresentation-edit" to={`edit-project/${this.props.project.id}`}>
                    <span className="glyphicon glyphicon-cog"> </span>
                </Link>
                <a className="projectPresentation-remove" href="#" onClick={this.onProjectRemove}>
                    <span className="glyphicon glyphicon-remove"> </span>
                </a>
            </div>
        );
    }
});
