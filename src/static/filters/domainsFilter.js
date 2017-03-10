import React from 'react';

import FilterButton from './filterButton';

export default React.createClass({
    getInitialState() {
        return {
            checkedDomains: [],
            displayed: false
        }
    },
    showFilters(e) {
        e.preventDefault();
        this.setState({displayed: true});
    },
    hideFilters(e) {
        e.preventDefault();
        this.setState({displayed: false});
    },
    toggleCheckbox(value) {
        let val = parseInt(value);
        let domain = this.props.project.domains.find((domainItem) => {
            return val === domainItem.id;
        });
        let checkedDomains = this.state.checkedDomains.slice(0);
        let idx = checkedDomains.indexOf(domain);

        if (idx !== -1) {
            checkedDomains.splice(idx, 1);
        } else {
            checkedDomains.push(domain);
        }

        this.props.onChange(checkedDomains);
        this.setState({checkedDomains});
    },
    render() {
        return this.state.displayed ? (
            <div className="domainsFilter">
                {this.props.project.domains.map((domain, i) => {
                    return (
                        <FilterButton
                            key={i}
                            value={domain.id}
                            onChange={this.toggleCheckbox}
                            label={domain.name}
                        />
                    );
                })}
                <div className="domainsFilter-hide">
                    <a href="#" onClick={this.hideFilters}>
                        <span className="glyphicon glyphicon-minus-sign"> </span>
                        Hide domains filters
                    </a>
                </div>
            </div>
        ) : (
            <div className="domainsFilter">
                <a className="domainsFilter-show" href="#" onClick={this.showFilters}>
                    <span className="glyphicon glyphicon-plus-sign"> </span>
                    Filter on domains...
                </a>
            </div>
        );
    }
});
