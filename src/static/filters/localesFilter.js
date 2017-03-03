import React from 'react';

import FlagFilterButton from './flagFilterButton';

export default React.createClass({
    getInitialState() {
        return {
            checkedLocales: []
        }
    },
    toggleCheckbox(e) {
        let val = parseInt(e.target.value);
        let locale = this.props.project.locales.find((localeItem) => {
            return val === localeItem.id;
        });
        let checkedLocales = this.state.checkedLocales.slice(0);
        let idx = checkedLocales.indexOf(locale);

        if (idx !== -1) {
            checkedLocales.splice(idx, 1);
        } else {
            checkedLocales.push(locale);
        }

        this.props.onChange(checkedLocales);
        this.setState({checkedLocales});
    },
    render() {
        return (
            <div className="localesFilter">
                <h5>Locales</h5>
                {this.props.project.locales.map((locale, i) => {
                    return (
                        <FlagFilterButton
                            key={i}
                            value={locale.id}
                            code={locale.code}
                            onChange={this.toggleCheckbox}
                            label={locale.name}
                        />
                    );
                })}
            </div>
        );
    }
});
