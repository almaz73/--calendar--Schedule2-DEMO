// /**
// * Выдает дни, и признак заполненности встречами
// * TODO требуется доработать, чтобы календать смог перемещаться по дням
// */
//
// import moment from 'moment';
// import * as bd from '../bd/localstorage';
//
// // var initialState = [];
// //
// // for (var i = 0; i < 42; i++) {
// //   var day = moment(new Date('08.28.2016')).add(i, 'day').format('MMMM D YYYY');
// //   initialState.push({
// //     day,
// //     busy: bd.getBuzy(day)
// //   })
// // }
//
// var initialState;
// var firstDay = '08.28.2016'; // первый день в углу календаря
//
// // заполнение календаря
// function fillingCaledar(firstDay){
//   var day, days=[]
//   for (var i = 0; i < 42; i++) {
//     day = moment(new Date(firstDay)).add(i, 'day').format('MMMM D YYYY');
//     days.push({
//       day,
//       busy: bd.getBuzy(day)
//     })
//   }
//   return days;
// }
//
// initialState = fillingCaledar(firstDay)
//
//
//
//
// export default function (state=initialState, action) {
//   if (action.type === "UPDATE_BUSY_DAYS") {
//     state = fillingCaledar(firstDay);
//     return [
//       ...state
//     ]
//   }
//   return state;
// }
