import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            query: ''
        }
    },
    handleChange(e) {
        this.setState({query: e.target.value});
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
                    />
                </div>
            </div>
        );
    }
});
