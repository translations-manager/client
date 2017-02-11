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
            <table className="translationsTable table table-striped">
                <thead>
                    <tr>
                        <th>Domain</th>
                        <th>Key</th>
                        {this.props.displayedLocales.map((locale, i) => {
                            return <th key={i}>{locale.name}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {this.props.translations.map((phrase, i) => {
                        return <TranslationsRow
                            key={i}
                            phrase={phrase}
                            onTranslationUpdate={this.handleTranslationUpdate}
                            onAskForDelete={this.handleAskForDelete}
                        />;
                    })}
                </tbody>
            </table>
        );
    }
});
