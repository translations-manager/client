import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';

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
        let rowProps = Object.assign({}, this.props);

        delete rowProps.phrase;
        delete rowProps.onTranslationUpdate;
        delete rowProps.onAskForDelete;
        delete rowProps.isStriped;
        rowProps.striped = this.props.isStriped;
        rowProps.selectable = false;

        return (
            <TableRow className="translationsRow" {...rowProps}>
                <TableRowColumn>{this.props.phrase.domain}</TableRowColumn>
                <TableRowColumn>{this.props.phrase.key}</TableRowColumn>
                {this.props.phrase.translations.map((translation, i) => {
                    return <TranslationCell key={i} translation={translation} onUpdate={this.handleTranslationUpdate} />
                })}
                <TableRowColumn className="translationsRow-delete">
                    <span className="glyphicon glyphicon-trash" onClick={this.handleDeleteClick}> </span>
                </TableRowColumn>
            </TableRow>
        );
    }
});
