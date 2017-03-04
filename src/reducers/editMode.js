/**
* редюсер переключения режима редактирования
*/
export default function (state=false, action) {
	if (action.type === "TOGGLE_EDIT") {
		return action.mode !== undefined ? action.mode : !state
	}
	return state;
}
