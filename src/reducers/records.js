/**
 * получаем данные дня
 */

import * as bd from '../bd/localstorage';

var initialState = bd.datas[0]

export default function myReducer(state=initialState, action) {
  if (action.type === "GET_DAY") {
    state = bd.getRecByDate(action.day);
		return {
      ...state,
      day: action.day
		}
	}

  if (action.type === "SAVE_MEET") {
    state = bd.save(
      action.author,
      action.text,
      action.day,
      action.oldAuthor,
      action.oldText
    );
    return {
      ...state
    }
  }

  if(action.type === "DELETE_MEET"){
    state = bd.del(action.meet.text, action.meet.author, action.day);
    return {
      ...state
    }
  }

  return state;
}
