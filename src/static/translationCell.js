import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            mode: 'display',
            translation: this.props.translation,
            content: this.props.translation.content ? this.props.translation.content : ''
        }
    },
    switchToEditMode() {
        this.setState({mode: 'edit'});
    },
    handleChange(e) {
        e.preventDefault();
        this.setState({content: e.target.value});
    },
    handleSubmit() {
        let translation = this.state.translation;
        translation.content = this.state.content;
        this.props.onUpdate(translation);
        this.setState({translation, mode: 'display'});
    },
    render() {
        if (this.state.mode === 'edit') {
            return (
                <td>
                    <input type="text" value={this.state.content} onChange={this.handleChange} />
                    <button className="btn btn-xs" onClick={this.handleSubmit}>
                        <span className="glyphicon glyphicon-ok"> </span>
                    </button>
                </td>
            );
        }
        return (
            <td>
                {this.state.translation.content}
                <button className="btn btn-xs" onClick={this.switchToEditMode}>
                    <span className="glyphicon glyphicon-pencil"> </span>
                </button>
            </td>
        );
    }
});
