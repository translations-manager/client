import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
    handleCloseClick() {
        this.props.onClose();
    },
    render() {
        const actions = [
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.handleCloseClick}
            />,
        ];

        return (
            <Dialog
                actions={actions}
                modal={true}
                open={true}
                title={this.props.title ? this.props.title : null}
            >
                {this.props.message}
            </Dialog>
        );
    }
});
