// import moment from 'moment';
//
// var initialState=[];
// for(var i=0; i<42; i++){
//   initialState.push(moment(new Date('08.28.2016')).add(i,'day').format('MMMM D'));
// }

import * as bd from './localstorage'

var initialState = bd.datas[1]

export default function myReducer(state=initialState, action){
	if(action.type==="GET_DAY"){
		return {
      ...state,
      day:[action.payload]
		}
	}
	return state;
}
