import React from 'react';

import FilterButton from './filterButton';

export default React.createClass({
    getInitialState() {
        return {
            checkedLocales: []
        }
    },
    toggleCheckbox(value) {
        let val = parseInt(value);
        let locale = this.props.project.locales.find((localeItem) => {
            return val === localeItem.id;
        });
        let checkedLocales = this.state.checkedLocales.slice(0);

        if (checkedLocales[locale.id]) {
            delete checkedLocales[locale.id];
        } else {
            checkedLocales[locale.id] = locale;
        }

        this.props.onChange(checkedLocales);
        this.setState({checkedLocales});
    },
    render() {
        return (
            <div className="localesFilter">
                {this.props.project.locales.map((locale, i) => {
                    return (
                        <FilterButton
                            key={i}
                            value={locale.id}
                            additionalClass={`filterButton-flag filterButton-flag--${locale.code}`}
                            onChange={this.toggleCheckbox}
                            label={locale.name}
                        />
                    );
                })}
            </div>
        );
    }
});
