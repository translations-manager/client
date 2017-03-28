import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export default React.createClass({
    handleClose() {
        this.props.onClose();
    },
    render() {
        return <Snackbar
            open={true}
            message={this.props.message}
            autoHideDuration={10000}
            onRequestClose={this.handleClose}
            className="errorMessage"
        />
    }
});
