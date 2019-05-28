import {handleActions} from 'redux-actions';

import initialState from './initialState';

export default handleActions(
	{
		RESET_DATA: state =>
			merge(state, {
				data: {
					fat: [],
					muscle: [],
					visceralFat: [],
					weight: [],
				},
			}),
		SET_FORM_DATA: (state, {payload: {csv}}) =>
			merge(state, {
				formData: csv,
			}),
	},
	initialState
);

/**
 * Merges some objects into another object or array. If the target is an object,
 * the rest of objects are Object.assigned to it. If the target is an array, the
 * rest of objects are Array.concatenated to it.
 *
 * This method always returns a new copy of the target object or array.
 *
 * @param {object|array} target
 * @param  {...any} objects
 */
function merge(target, ...objects) {
	if (Array.isArray(target)) {
		return target.concat(objects);
	} else {
		return Object.assign({}, target, ...objects);
	}
}
