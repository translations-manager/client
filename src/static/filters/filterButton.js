import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
    getInitialState() {
        return {selected: false};
    },
    handleChange() {
        this.props.onChange(this.props.value);
        this.setState({selected: !this.state.selected});
    },
    render() {
        return (
            <RaisedButton
                label={this.props.label}
                onTouchTap={this.handleChange}
                primary={this.state.selected}
                className="filterButton"
            />
        );
    }
});
