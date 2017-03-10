import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

export default React.createClass({
    render() {
        return (
            <div className="loader">
                <RefreshIndicator
                    size={40}
                    status="loading"
                    left={0}
                    top={0}
                />
            </div>
        );
    }
});
