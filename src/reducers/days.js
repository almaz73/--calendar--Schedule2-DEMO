import moment from 'moment';

var initialState=[];
for(var i=0; i<42; i++){
  initialState.push(moment(new Date('08.28.2016')).add(i,'day').format('MMMM D'));
}

export default function myReducer(state=initialState, action){
	if(action.type==="GET_REC_BYDATE"){
		return [
			...state
		]
	}
	return state;
}
