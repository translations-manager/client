import React from 'react';

export default React.createClass({
    handleOkClick() {
        this.props.onOk();
    },
    handleCancelClick() {
        this.props.onCancel();
    },
    render() {
        return (
            <div className="popin">
                <div className="popinBody">
                    <p>{this.props.message}</p>
                </div>
                <div className="popinFooter">
                    <button type="button" className="btn btn-default" onClick={this.handleOkClick}>OK</button>
                    <button type="button" className="btn btn-default" onClick={this.handleCancelClick}>Cancel</button>
                </div>
            </div>
        );
    }
});
