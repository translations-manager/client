import React from 'react';
import $ from 'jquery';

import PhraseNewContainer from '../containers/phraseNewContainer';

import TranslationSearchFilters from '../static/translationSearchFilters';
import TranslationsTable from '../static/translationsTable';

export default React.createClass({
    getInitialState() {
        return {
            displayedLocales: [],
            domains: [],
            query: '',
            translations: []
        }
    },
    componentDidMount() {
        this.query();
    },
    componentDidUpdate(prevProps, prevState) {
        if (
            JSON.stringify(prevState.displayedLocales) !== JSON.stringify(this.state.displayedLocales) ||
            JSON.stringify(prevState.domains) !== JSON.stringify(this.state.domains) ||
            prevState.query !== this.state.query
        ) {
            this.query();
        }
    },
    updateDomains(domains) {
        this.setState({domains});
    },
    updateDisplayedLocales(displayedLocales) {
        this.setState({displayedLocales});
    },
    updateQuery(query) {
        this.setState({query});
    },
    handleTranslationUpdate(translation) {
        $.ajax({
            url: translation.id ? `${this.props.api}/translations/${translation.id}` : `${this.props.api}/translations`,
            data: translation,
            method: translation.id ? 'PUT' : 'POST'
        }).done(() => {
            this.query();
        });
    },
    query() {
        let localeIdsQuery = this.state.displayedLocales.map((locale) => {
            return `locale_ids[]=${locale.id}`;
        }).join('&');
        let domainIdsQuery = this.state.domains.map((domain) => {
            return `domain_ids[]=${domain.id}`;
        }).join('&');
        $.get(`${this.props.api}/phrases?project=${this.props.project.id}&${localeIdsQuery}&${domainIdsQuery}&q=${this.state.query}`, (data) => {
            this.setState({translations: data});
        });
    },
    render() {
        return (
            <div className="translationsSearch">
                <TranslationSearchFilters
                    project={this.props.project}
                    onDisplayedLocalesChange={this.updateDisplayedLocales}
                    onDomainsChange={this.updateDomains}
                    onQueryChange={this.updateQuery}
                />
                <PhraseNewContainer project={this.props.project} api={this.props.api} />
                <TranslationsTable
                    displayedLocales={this.state.displayedLocales}
                    translations={this.state.translations}
                    onTranslationUpdate={this.handleTranslationUpdate}
                />
            </div>
        );
    }
});
