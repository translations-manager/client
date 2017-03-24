import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
    handleOkClick() {
        this.props.onOk();
    },
    handleCancelClick() {
        this.props.onCancel();
    },
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleCancelClick}
            />,
            <FlatButton
                label="OK"
                primary={true}
                onTouchTap={this.handleOkClick}
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
