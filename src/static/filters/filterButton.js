import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
    getInitialState() {
        return {selected: this.props.selected !== undefined ? this.props.selected : false};
    },
    handleChange() {
        this.props.onChange(this.props.value);
        this.setState({selected: !this.state.selected});
    },
    render() {
        const additionalClassName = this.props.additionalClass ? this.props.additionalClass : '';

        return (
            <RaisedButton
                label={this.props.label}
                onTouchTap={this.handleChange}
                primary={this.state.selected}
                className={`filterButton ${additionalClassName}`}
            />
        );
    }
});
