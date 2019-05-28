import {createActions} from 'redux-actions';

export default createActions({
	RESET_DATA: () => ({}),
	SET_FORM_DATA: csv => ({csv}),
});
