import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import store from 'redux-store';

const AppComponent = ({configuration}) => {
	return (
		<div>
			<Provider store={store}>
				<div />
			</Provider>
		</div>
	);
};

AppComponent.propTypes = {
	configuration: PropTypes.object.isRequired,
	contextPath: PropTypes.string.isRequired,
	portletElementId: PropTypes.string.isRequired,
	portletNamespace: PropTypes.string.isRequired,
};

export default AppComponent;
