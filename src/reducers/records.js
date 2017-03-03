/**
 * получаем данные одного дня
 */

import * as bd from '../bd/localstorage';

var initialState = bd.datas[0]

export default function myReducer(state=initialState, action) {
  if (action.type === "GET_DAY") {
    state = bd.getRecByDate(action.payload);
		return {
      ...state,
      day:[action.payload]
		}
	}

  if (action.type === "SAVE_MEET") {
    state = bd.save(action.name, action.content, action.day);
    return {
      ...state
    }
  }

  if(action.type === "DELETE_MEET"){
    console.log(" Будем удалять = ", action.meet);
    console.log(" action.day = ", action.day);
    state = bd.del(action.meet.text, action.meet.author, action.day);
    return {
      ...state
    }
  }

  return state;
}
