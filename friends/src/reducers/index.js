import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../actions';

const initialState = {
	data       : [
		{
			id    : 0,
			name  : 'Joshua',
			age   : 20,
			email : 'Nope@no.com'
		}
	],
	error      : '',
	isFetching : false
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_DATA_START:
			return { data: [], error: '', isFetching: true };
		case FETCH_DATA_SUCCESS:
			return { data: [ ...action.payload ], error: '', isFetching: false };
		case FETCH_DATA_FAIL:
			return { data: [], error: action.payload, isFetching: false };
		default:
			return state;
	}
}

export default reducer;
