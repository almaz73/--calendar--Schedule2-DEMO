import moment from 'moment';
import * as bd from '../bd/localstorage';

var firstMonth = moment(new Date()).format('MMM YYYY');
var initialState = fillingCaledar(firstMonth);

// заполнение календаря и занятых дней
function fillingCaledar(firstMonth){
  var firstDay = searchCornerDay(firstMonth)
  var
    days=[],
    DAY = new Date(firstDay),
    month = moment(DAY).add(15, 'day').format('MMM YYYY');

  for (var i = 0, day; i < 42; i++) {
    day = moment(DAY).add(i, 'day').format('MMMM D YYYY');
    days.push({
      day,
      busy: bd.getBuzy(day)
    })
  }
  return {days, month};
}

// нахождение углового числа
function searchCornerDay(month){
  var
    DAY = moment(new Date(month)),
    date = Number(DAY.format('D')),
    dayOfWeek = Number(DAY.format('e'));

  if (dayOfWeek === 0) {dayOfWeek = 7}
  var firstDay = DAY.add( -(date+dayOfWeek-2), 'day').format('MMMM D YYYY');
  return firstDay;
}

export default function (state=initialState, action) {

	if (action.type === "MONTH_LEFT") {
    var month = moment(new Date(state.month)).add(-1, 'months').format('MMM YYYY');
    firstMonth = month;
    state =fillingCaledar(month);
    return {
      ...state
    }
	}

  if (action.type === "MONTH_RIGHT") {
    var month = moment(new Date(state.month)).add(1, 'months').format('MMM YYYY');
    firstMonth = month;
    state =fillingCaledar(month);
    return {
      ...state
    }
	}

  if (action.type === "UPDATE_BUSY_DAYS") {
    state = fillingCaledar(firstMonth);
    return {
      ...state
    }
  }
	return state;
}
