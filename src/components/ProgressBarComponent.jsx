import React from 'react';

import { connect } from "react-redux";

const mapStateToProps = state => {
    return { isLoading: state.isLoading };
};

class ProgressBar extends React.Component {
    render() {
        return (
        	<div>
        		{ this.props.isLoading && 
        			<div className="progress"><div className="indeterminate"></div></div>
        		}
        	</div>
        );
    }
}

const ProgressBarComponent = connect(mapStateToProps)(ProgressBar);
export default ProgressBarComponent;