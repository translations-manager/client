import React from 'react';

import TranslationCell from '../static/translationCell';

export default React.createClass({
    handleTranslationUpdate(translation) {
        translation.phrase = this.props.phrase.id;
        this.props.onTranslationUpdate(translation);
    },
    render() {
        return (
            <tr>
                <td>{this.props.phrase.domain}</td>
                <td>{this.props.phrase.key}</td>
                {this.props.phrase.translations.map((translation, i) => {
                    return <TranslationCell key={i} translation={translation} onUpdate={this.handleTranslationUpdate} />
                })}
            </tr>
        );
    }
});
