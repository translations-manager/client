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
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.translation) !== JSON.stringify(this.props.translation)) {
            this.setState({translation: this.props.translation, content: this.props.translation.content});
        }
    },
    render() {
        if (this.state.mode === 'edit') {
            return (
                <td className="translationCell">
                    <input type="text" value={this.state.content} onChange={this.handleChange} onBlur={this.handleSubmit} />
                </td>
            );
        }
        return (
            <td className="translationCell" onClick={this.switchToEditMode}>
                {this.state.translation.content}
            </td>
        );
    }
});
