import React from 'react';

import FilterButton from './filterButton';

export default React.createClass({
    getInitialState() {
        return {
            checkedDomains: []
        }
    },
    toggleCheckbox(e) {
        let val = parseInt(e.target.value);
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
        return (
            <div className="domainsFilter">
                <h5>Domains</h5>
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
            </div>
        );
    }
});
