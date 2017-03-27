import React from 'react';
import TextField from 'material-ui/TextField';

export default React.createClass({
    getInitialState() {
        return {
            query: ''
        }
    },
    handleChange(e) {
        e.preventDefault();
        this.setState({query: e.target.value});
        this.props.onChange(e.target.value);
    },
    render() {
        return (
            <TextField
                className="searchFilter"
                floatingLabelText="Search by domain, phrase key, translation, ..."
                onChange={this.handleChange}
                value={this.state.query}
            />
        );
    }
});
