import React from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
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
            <Table selectable={false}>
                <TableHeader displaySelectAll={false} enableSelectAll={false}>
                    <TableRow selectable={false}>
                        <TableHeaderColumn>Domain</TableHeaderColumn>
                        <TableHeaderColumn>Key</TableHeaderColumn>
                        {this.props.displayedLocales.map((locale, i) => {
                            return <TableHeaderColumn key={i}>{locale.name}</TableHeaderColumn>;
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {this.props.translations.map((phrase, i) => {
                        return <TranslationsRow
                            key={i}
                            phrase={phrase}
                            onTranslationUpdate={this.handleTranslationUpdate}
                            onAskForDelete={this.handleAskForDelete}
                            isStriped={!!(i % 2)}
                        />;
                    })}
                </TableBody>
            </Table>
        );
    }
});
