//import * as bd from './localstorage'

// var initialState = bd.initialState;


export default function myReducer(state=[], action){


	if(action.type==="GET_REC_BYDATE"){

		return [
			...state
		]
	}

	return state;
}
