import React from 'react';

import PhraseNewContainer from '../containers/phraseNewContainer';

import ConfirmPopin from '../static/confirmPopin';
import Loader from '../static/loader';
import Paginate from '../static/paginate';
import TranslationSearchFilters from '../static/translationSearchFilters';
import TranslationsTable from '../static/translationsTable';

import Client from '../client';

export default React.createClass({
    lastSearchQuery: null,
    getInitialState() {
        return {
            displayedLocales: [],
            domains: [],
            query: '',
            translations: [],
            phraseToDelete: null,
            pendingQuery: true,
            currentPage: 1,
            totalPages: null
        }
    },
    componentDidMount() {
        this.query();
    },
    componentDidUpdate(prevProps, prevState) {
        if (
            JSON.stringify(prevState.displayedLocales) !== JSON.stringify(this.state.displayedLocales) ||
            JSON.stringify(prevState.domains) !== JSON.stringify(this.state.domains) ||
            prevState.query !== this.state.query ||
            prevState.currentPage !== this.state.currentPage
        ) {
            this.query();
        }
    },
    updateDomains(domains) {
        this.setState({domains, pendingQuery: true});
    },
    updateDisplayedLocales(displayedLocales) {
        this.setState({displayedLocales, pendingQuery: true});
    },
    updateQuery(query) {
        this.setState({query, pendingQuery: true});
    },
    handleTranslationUpdate(translation) {
        Client.ajax({
            url: translation.id ? `translations/${translation.id}` : `translations`,
            data: translation,
            type: translation.id ? 'PUT' : 'POST'
        }).done(() => {
            this.query();
        });
    },
    handleAskForDelete(phrase) {
        this.setState({phraseToDelete: phrase});
    },
    okForDelete() {
        Client.ajax({
            url: `phrases/${this.state.phraseToDelete.id}`,
            type: 'DELETE'
        }).done(() => {
            this.query();
            this.setState({phraseToDelete: null});
        });
    },
    clearPhraseToDelete() {
        this.setState({phraseToDelete: null});
    },
    handlePageChange(page) {
        this.setState({currentPage: page, pendingQuery: true});
    },
    query() {
        let localeIdsQuery = this.state.displayedLocales.map((locale) => {
            return `locale_ids[]=${locale.id}`;
        }).join('&');
        let domainIdsQuery = this.state.domains.map((domain) => {
            return `domain_ids[]=${domain.id}`;
        }).join('&');
        let xhr = Client.ajax({
            url: `phrases?project=${this.props.project.id}&${localeIdsQuery}&${domainIdsQuery}&q=${this.state.query}&page=${this.state.currentPage}`,
            type: 'GET'
        });

        xhr.done((data) => {
            this.setState({
                translations: data.phrases,
                pendingQuery: false,
                totalPages: data.metadata.nb_pages,
                page: this.state.page > data.metadata.nb_pages ? data.metadata.nb_pages : this.state.page
            });
        });

        if (this.lastSearchQuery !== null) {
            this.lastSearchQuery.abort();
        }

        this.lastSearchQuery = xhr;
    },
    render() {
        return (
            <div className="translationsSearch">
                {this.state.pendingQuery ? <Loader /> : null}
                {this.state.phraseToDelete ? <ConfirmPopin message="Are you sure you want to delete this phrase ?" onOk={this.okForDelete} onCancel={this.clearPhraseToDelete} /> : null}
                <TranslationSearchFilters
                    project={this.props.project}
                    onDisplayedLocalesChange={this.updateDisplayedLocales}
                    onDomainsChange={this.updateDomains}
                    onQueryChange={this.updateQuery}
                />
                <PhraseNewContainer project={this.props.project} />
                <TranslationsTable
                    displayedLocales={this.state.displayedLocales}
                    translations={this.state.translations}
                    onTranslationUpdate={this.handleTranslationUpdate}
                    onAskForDelete={this.handleAskForDelete}
                    pendingQuery={this.state.pendingQuery}
                />
                {this.state.totalPages ? (
                    <Paginate
                        page={this.state.currentPage}
                        total={this.state.totalPages}
                        onChange={this.handlePageChange}
                    />
                ) : null}
            </div>
        );
    }
});
