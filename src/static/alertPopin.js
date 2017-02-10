import React from 'react';

export default React.createClass({
    handleCloseClick() {
        this.props.onClose();
    },
    render() {
        return (
            <div className="popin">
                <div className="popinBody">
                    <p>{this.props.message}</p>
                </div>
                <div className="popinFooter">
                    <button type="button" className="btn btn-default" onClick={this.handleCloseClick}>OK</button>
                </div>
            </div>
        );
    }
});
