import * as bd from './localstorage';

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
    state = bd.save(action.name, action.content, action.day);




		// return {
    //   ...state,
		// 	editMode:false,
    //   day:[action.day]
		// }
	}


	return state;
}
