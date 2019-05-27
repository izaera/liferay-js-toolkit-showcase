import {createActions} from 'redux-actions';

export default createActions({
	SET_FORM_DATA: csv => ({csv}),
});
