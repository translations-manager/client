import React from 'react';

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
            <div className="searchFilter">
                <div className="input-group">
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-search"> </span>
                    </span>
                    <input
                        className="form-control input-sm"
                        type="text"
                        placeholder="Search by key, translation, ..."
                        onChange={this.handleChange}
                        value={this.state.query}
                    />
                </div>
            </div>
        );
    }
});
