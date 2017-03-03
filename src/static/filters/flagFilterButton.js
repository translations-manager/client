import React from 'react';

export default React.createClass({
    handleChange(e) {
        this.props.onChange(e);
    },
    render() {
        const localeCodeClass = this.props.code.substr(this.props.code.length - 2).toLowerCase();
        return (
            <div className="flagFilterButton">
                <label>
                    <input type="checkbox" value={this.props.value} onChange={this.handleChange} />
                    <span className={`flagFilterButton-flag flagFilterButton-flag--${localeCodeClass}`}>
                        {this.props.label}
                    </span>
                </label>
            </div>
        );
    }
});
