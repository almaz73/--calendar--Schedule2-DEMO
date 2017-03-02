/**
* Выдает дни, и признак заполненности встречами
* TODO требуется доработать, чтобы календать смог перемещаться по дням
*/

import moment from 'moment';
import * as bd from './localstorage';

var initialState = [];
var meetDay = [1, 23];

for (var i = 0; i < 42; i++) {
  var day = moment(new Date('08.28.2016')).add(i, 'day').format('MMMM D');
  initialState.push({
    day,
    busy: bd.getBuzy(day)
  });
}


export default function myReducer(state=initialState, action) {
  if (action.type === "UPDATE_DATE") {
    state = [];
    for (var i = 0; i < 42; i++) {
      var day = moment(new Date('08.28.2016')).add(i, 'day').format('MMMM D');
      state.push({
        day,
        busy: bd.getBuzy(day)
      });
    }
    return [
      ...state
    ]
  }
  return state;
}
