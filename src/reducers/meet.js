import * as bd from './localstorage'

var initialState = bd.datas[0]

export default function myReducer(state=initialState, action){
	if(action.type==="GET_DAY"){
    state = bd.getRecByDate(action.payload);
		return {
      ...state,
      day:[action.payload]
		}
	}

	if(action.type==="SAVE_MEET"){
		console.log(" val =SAVE_MEETSAVE_MEETSAVE_MEET action=",action);
    // state = bd.getRecByDate(action.payload);
		// return {
    //   ...state,
    //   day:[action.payload]
		// }
	}


	return state;
}
