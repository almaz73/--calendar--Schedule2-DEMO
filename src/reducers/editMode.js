export default function myReducer(state=true, action){
	if(action.type==="TOGGLE_EDIT"){
		console.log(" action.mode = ", action.mode);
		return action.mode!==undefined?action.mode:!state
	}
	return state;
}
