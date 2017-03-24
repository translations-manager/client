import React from 'react';

import TranslationCell from '../static/translationCell';

export default React.createClass({
    handleTranslationUpdate(translation) {
        translation.phrase = this.props.phrase.id;
        this.props.onTranslationUpdate(translation);
    },
    handleDeleteClick() {
        this.props.onAskForDelete(this.props.phrase);
    },
    render() {
        return (
            <tr className="translationsRow">
                <td>{this.props.phrase.domain}</td>
                <td>{this.props.phrase.key}</td>
                {this.props.phrase.translations.map((translation, i) => {
                    return <TranslationCell key={i} translation={translation} onUpdate={this.handleTranslationUpdate} />
                })}
                <td className="translationsRow-delete">
                    <span className="glyphicon glyphicon-trash" onClick={this.handleDeleteClick}> </span>
                </td>
            </tr>
        );
    }
});
