import {createActions} from 'redux-actions';

export default createActions({
	LOAD_FORM_DATA: () => ({}),
	RESET_DATA: () => ({}),
	SET_FORM_DATA: csv => ({csv}),
});
