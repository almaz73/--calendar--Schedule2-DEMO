import * as bd from './localstorage'

var initialState = bd.datas[1]

export default function myReducer(state=initialState, action){
	if(action.type==="GET_DAY"){
    state = bd.getRecByDate(action.payload);
		return {
      ...state,
      day:[action.payload]
		}
	}
	return state;
}
