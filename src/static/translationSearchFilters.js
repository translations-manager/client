import React from 'react';
import Paper from 'material-ui/Paper';

import DomainsFilter from '../static/filters/domainsFilter';
import LocalesFilter from '../static/filters/localesFilter';
import SearchFilter from '../static/filters/searchFilter';

export default React.createClass({
    updateSearch(query) {
        this.props.onQueryChange(query);
    },
    updateDomainsFilter(domains) {
        this.props.onDomainsChange(domains);
    },
    updateLocalesFilter(locales) {
        this.props.onDisplayedLocalesChange(locales);
    },
    render() {
        return (
            <Paper className="searchFiltersContainer">
                <LocalesFilter project={this.props.project} onChange={this.updateLocalesFilter} />
                <DomainsFilter project={this.props.project} onChange={this.updateDomainsFilter} />
                <SearchFilter onChange={this.updateSearch} />
            </Paper>
        );
    }
});
