import React from 'react';

import TranslationsRow from '../static/translationsRow';

export default React.createClass({
    handleTranslationUpdate(translation) {
        this.props.onTranslationUpdate(translation);
    },
    handleAskForDelete(phrase) {
        this.props.onAskForDelete(phrase);
    },
    render() {
        return (
            this.props.translations.length ? (
                <table className={`translationsTable${this.props.pendingQuery ? '--pending' : ''}`}>
                    <thead>
                        <tr>
                            <th>Domain</th>
                            <th>Key</th>
                            {this.props.translations[0].translations.map((translation, i) => {
                                const displayedLocale = this.props.displayedLocales[parseInt(translation.locale)];
                                return (
                                    <th key={i}>
                                        {displayedLocale ? displayedLocale.name : ''}
                                    </th>
                                );
                            })}
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.translations.map((phrase, i) => {
                            return <TranslationsRow
                                key={i}
                                phrase={phrase}
                                onTranslationUpdate={this.handleTranslationUpdate}
                                onAskForDelete={this.handleAskForDelete}
                                isStriped={!!(i % 2)}
                            />;
                        })}
                    </tbody>
                </table>
            ) : null
        );
    }
});
