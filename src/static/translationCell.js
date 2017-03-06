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
    handleKeyAction(e) {
        if (!this.keyMap) {
            this.keyMap = {};
        }
        this.keyMap[e.keyCode] = e.type == 'keydown';
        if (this.keyMap[13] && this.keyMap[16]) {
            this.keyMap = {};
            this.handleSubmit();
        } else if (this.keyMap[27]) {
            this.keyMap = {};
            this.setState({
                'mode': 'display',
                'content': this.props.translation.content
            });
        }
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
                    <textarea
                        onChange={this.handleChange}
                        onBlur={this.handleSubmit}
                        onKeyDown={this.handleKeyAction}
                        onKeyUp={this.handleKeyAction}
                        autoFocus={true}
                        value={this.state.content}
                        rows="10"
                    />
                    <span className="translationCell-help">
                        [Shift+ENTER] to confirm, [Esc] to cancel
                    </span>
                </td>
            );
        }
        const regexp = new RegExp(/<!\[CDATA\[([^]*)\]\]>/);
        const result = regexp.exec(this.state.translation.content);

        return (
            <td className="translationCell" onClick={this.switchToEditMode}>
                {result ? (
                    <span className="translationCell-cdataBlock">
                        <span className="translationCell-cdata">{`<![CDATA[`}</span>
                        {result[1]}
                        <span className="translationCell-cdata">{`]]>`}</span>
                    </span>
                ) : this.state.translation.content}
            </td>
        );
    }
});
