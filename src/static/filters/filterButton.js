import React from 'react';

export default React.createClass({
    handleChange(e) {
        this.props.onChange(e);
    },
    render() {
        return (
            <div className="filterButton">
                <label>
                    <input type="checkbox" value={this.props.value} onChange={this.handleChange} />
                    <span className={`filterButton-content ${this.props.additionalClass}`}>
                        {this.props.label}
                    </span>
                </label>
            </div>
        );
    }
});
