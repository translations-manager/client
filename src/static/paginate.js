import React from 'react';
import FontIcon from 'material-ui/FontIcon';

export default React.createClass({
    handlePageClick(e) {
        e.preventDefault();
        const el = e.target.tagName === 'SPAN' ? e.target.parentElement : e.target;
        this.props.onChange(parseInt(el.dataset.page));
    },
    render() {
        return (
            <ul className="paginate">
                {this.props.page > 1 ? (
                    <li className="paginate-arrow paginate-arrowLeft" data-page={this.props.page - 1} onClick={this.handlePageClick}>
                        <FontIcon className="material-icons">keyboard_arrow_left</FontIcon>
                    </li>
                ) : null}
                <li className={`paginate-number ${this.props.page == 1 ? 'paginate-current' : ''}`} data-page={1} onClick={this.handlePageClick}>1</li>
                {this.props.page > 3 ? (
                    <li className="paginate-separator">...</li>
                ) : null}
                {this.props.page > 2 ? (
                    <li className="paginate-number" data-page={this.props.page - 1} onClick={this.handlePageClick}>{this.props.page - 1}</li>
                ) : null}
                {this.props.page > 1 && this.props.page < this.props.total ? (
                    <li className="paginate-number paginate-current">{this.props.page}</li>
                ) : null}
                {this.props.page < this.props.total - 1 ? (
                    <li className="paginate-number" data-page={this.props.page + 1} onClick={this.handlePageClick}>{this.props.page + 1}</li>
                ) : null}
                {this.props.page < this.props.total - 2 ? (
                    <li className="paginate-separator">...</li>
                ) : null}
                {this.props.total > 1 ? (
                    <li className={`paginate-number ${this.props.page == this.props.total ? 'paginate-current' : ''}`} data-page={this.props.total} onClick={this.handlePageClick}>{this.props.total}</li>
                ) : null}
                {this.props.page < this.props.total ? (
                    <li className="paginate-arrow paginate-arrowRight" data-page={this.props.page + 1} onClick={this.handlePageClick}>
                        <FontIcon className="material-icons">keyboard_arrow_right</FontIcon>
                    </li>
                ) : null}
            </ul>

        );
    }
});
