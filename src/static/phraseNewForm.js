import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
    getInitialState() {
        return {
            domain: this.props.project.domains.length ? this.props.project.domains[0].id : null,
            file_location: this.props.project.file_locations.length ? this.props.project.file_locations[0].id : null,
            key: ''
        };
    },
    handleDomainChange(e, i, v) {
        this.setState({domain: v});
    },
    handleFileLocationChange(e, i, v) {
        this.setState({file_location: v});
    },
    handleKeyChange(e) {
        this.setState({key: e.target.value});
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },
    handleCancel() {
        this.props.onCancel();
    },
    render() {
        return (
            <div className="phraseNewForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="row phraseNewForm-inputs">
                        <div className="col-md-3">
                            <SelectField
                                floatingLabelText="Domain"
                                value={this.state.domain}
                                onChange={this.handleDomainChange}
                            >
                                {this.props.project.domains.map((domain, i) => {
                                    return <MenuItem value={domain.id} key={i} primaryText={domain.name} />;
                                })}
                            </SelectField>
                        </div>
                        <div className="col-md-3">
                            <SelectField
                                floatingLabelText="File location"
                                value={this.state.file_location}
                                onChange={this.handleFileLocationChange}
                            >
                                {this.props.project.file_locations.map((fileLocation, i) => {
                                    return <MenuItem value={fileLocation.id} key={i} primaryText={fileLocation.path} />;
                                })}
                            </SelectField>
                        </div>
                        <div className="col-md-6">
                            <TextField
                                className="searchFilter"
                                floatingLabelText="Phrase key"
                                onChange={this.handleKeyChange}
                                value={this.state.key}
                            />
                        </div>
                    </div>
                    <div className="phraseNewForm-actions">
                        <RaisedButton label="Cancel" onClick={this.handleCancel} />
                        <RaisedButton label="OK" secondary={true} onClick={this.handleSubmit} />
                    </div>
                </form>
            </div>
        );
    }
});
