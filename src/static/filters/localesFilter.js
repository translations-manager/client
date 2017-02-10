import React from 'react';

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
                        <span className="localesFilter-filter" key={i}>
                            <input
                                type="checkbox"
                                id={`localeFilter-${locale.id}`}
                                value={locale.id}
                                onChange={this.toggleCheckbox}
                            />
                            <label htmlFor={`localeFilter-${locale.id}`}>{locale.name}</label>
                        </span>
                    );
                })}
            </div>
        );
    }
});
