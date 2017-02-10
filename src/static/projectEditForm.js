import React from 'react';

export default React.createClass({
    getInitialState() {
        return {project: this.props.project};
    },
    editName(e) {
        e.preventDefault();
        let project = this.state.project;

        project.name = e.target.value;
        this.setState({project});
    },
    addDomain(e) {
        e.preventDefault();
        let project = this.state.project;

        project.domains.push({id: null, name: ''});
        this.setState({project});
    },
    removeDomain(e) {
        e.preventDefault();
        let project = this.state.project;

        project.domains.splice(e.target.getAttribute('data-key'), 1);
        this.setState({project});
    },
    editDomain(e) {
        e.preventDefault();
        let project = this.state.project;

        project.domains[e.target.getAttribute('data-key')].name = e.target.value;
        this.setState({project});
    },
    addFileLocation(e) {
        e.preventDefault();
        let project = this.state.project;

        project.file_locations.push({id: null, path: ''});
        this.setState({project});
    },
    removeFileLocation(e) {
        e.preventDefault();
        let project = this.state.project;

        project.file_locations.splice(e.target.getAttribute('data-key'), 1);
        this.setState({project});
    },
    editFileLocation(e) {
        e.preventDefault();
        let project = this.state.project;

        project.file_locations[e.target.getAttribute('data-key')].path = e.target.value;
        this.setState({project});
    },
    addLocale(e) {
        e.preventDefault();
        let project = this.state.project;

        project.locales.push({id: null, code: '', name: ''});
        this.setState({project});
    },
    removeLocale(e) {
        e.preventDefault();
        let project = this.state.project;

        project.locales.splice(e.target.getAttribute('data-key'), 1);
        this.setState({project});
    },
    editLocaleCode(e) {
        e.preventDefault();
        let project = this.state.project;

        project.locales[e.target.getAttribute('data-key')].code = e.target.value;
        this.setState({project});
    },
    editLocaleName(e) {
        e.preventDefault();
        let project = this.state.project;

        project.locales[e.target.getAttribute('data-key')].name = e.target.value;
        this.setState({project});
    },
    submit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.project);
    },
    render() {
        return (
            <form className="projectEditForm" onSubmit={this.submit}>
                <div className="projectEditForm-section">
                    <label>Name</label>
                    <input className="form-control" name="name" value={this.state.project.name} onChange={this.editName} />
                </div>
                <div className="projectEditForm-section">
                    <label>Domains</label>
                    {this.state.project.domains.map((domain, i) => {
                        return (
                            <div className="projectEditForm-deletableInput" key={i}>
                                <input type="text" className="form-control" value={domain.name} data-key={i} onChange={this.editDomain} placeholder="Domain name" />
                                <a className="btn btn-xs btn-danger" href="#" data-key={i} onClick={this.removeDomain}>
                                    <span className="glyphicon glyphicon-remove" data-key={i}> </span>
                                </a>
                            </div>
                        );
                    })}
                    <div className="projectEditForm-moreWrapper">
                        <a href="#" className="projectEditForm-more btn btn-xs btn-primary" onClick={this.addDomain}>
                            <span className="glyphicon glyphicon-plus"> </span>
                        </a>
                    </div>
                </div>
                <div className="projectEditForm-section">
                    <label>Files locations</label>
                    {this.state.project.file_locations.map((fileLocation, i) => {
                        return (
                            <div className="projectEditForm-deletableInput" key={i}>
                                <input type="text" className="form-control" value={fileLocation.path} data-key={i} onChange={this.editFileLocation} placeholder="Path" />
                                <a className="btn btn-xs btn-danger" href="#" data-key={i} onClick={this.removeFileLocation}>
                                    <span className="glyphicon glyphicon-remove" data-key={i}> </span>
                                </a>
                            </div>
                        );
                    })}
                    <div className="projectEditForm-moreWrapper">
                        <a href="#" className="projectEditForm-more btn btn-xs btn-primary" onClick={this.addFileLocation}>
                            <span className="glyphicon glyphicon-plus"> </span>
                        </a>
                    </div>
                </div>
                <div className="projectEditForm-section">
                    <label>Locales</label>
                    {this.state.project.locales.map((locale, i) => {
                        return (
                            <div className="projectEditForm-deletableInput" key={i}>
                                <input type="text" className="form-control" value={locale.code} data-key={i} onChange={this.editLocaleCode} placeholder="Locale code (ie br_FR, en, pt_BR, ...)" />
                                <input type="text" className="form-control" value={locale.name} data-key={i} onChange={this.editLocaleName} placeholder="Displayed name" />
                                <a className="btn btn-xs btn-danger" href="#" data-key={i} onClick={this.removeLocale}>
                                    <span className="glyphicon glyphicon-remove" data-key={i}> </span>
                                </a>
                            </div>
                        );
                    })}
                    <div className="projectEditForm-moreWrapper">
                        <a href="#" className="projectEditForm-more btn btn-xs btn-primary" onClick={this.addLocale}>
                            <span className="glyphicon glyphicon-plus"> </span>
                        </a>
                    </div>
                </div>
                <div className="projectEditForm-section">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        );
    }
});
