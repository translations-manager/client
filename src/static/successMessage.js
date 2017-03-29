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
            autoHideDuration={2000}
            onRequestClose={this.handleClose}
            className="successMessage"
        />
    }
});
