import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default React.createClass({
    getInitialState() {
        return {project: this.props.project};
    },
    editName(e) {
        e.preventDefault();
        let project = this.state.project;

        project.name = e.target.value;
        this.setState({project});
    },
    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.project);
    },
    render() {
        return (
            <form className="projectNewForm" onSubmit={this.submit}>
                <div className="projectNewForm-name">
                    <TextField
                        floatingLabelText="Name"
                        onChange={this.editName}
                        value={this.state.project.name}
                    />
                </div>
                <div className="projectNewForm-submit">
                    <RaisedButton label="Create project" secondary={true} onClick={this.submit} />
                </div>
            </form>
        );
    }
});
