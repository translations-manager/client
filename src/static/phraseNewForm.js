import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            domain: this.props.project.domains.length ? this.props.project.domains[0].id : null,
            file_location: this.props.project.file_locations.length ? this.props.project.file_locations[0].id : null,
            key: ''
        };
    },
    handleDomainChange(e) {
        this.setState({domain: e.target.value});
    },
    handleFileLocationChange(e) {
        this.setState({file_location: e.target.value});
    },
    handleKeyChange(e) {
        this.setState({key: e.target.value});
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
    },
    render() {
        return (
            <div className="phraseNewForm">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <select className="form-control" onChange={this.handleDomainChange}>
                                {this.props.project.domains.map((domain, i) => {
                                    return <option value={domain.id} key={i}>{domain.name}</option>
                                })}
                            </select>
                        </div>
                        <div className="col-md-3">
                            <select className="form-control" onChange={this.handleFileLocationChange}>
                                {this.props.project.file_locations.map((fileLocation, i) => {
                                    return <option value={fileLocation.id} key={i}>{fileLocation.path}</option>
                                })}
                            </select>
                        </div>
                        <div className="col-md-5">
                            <input className="form-control" type="text" placeholder="Key" onChange={this.handleKeyChange} />
                        </div>
                        <div className="col-md-1">
                            <input className="btn btn-default" type="submit" value="OK" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
});
