/**
 * Вместо базы данных используем локалхост
 */

var moment = require('moment');

export var datas = [
  {
    meet: [
      {
        text: "Sheduling a meeting time shouldn't be hard. Sheduling a meeting time shouldn't be hard.Sheduling a meeting time shouldn't be hard.Sheduling a meeting time shouldn't be hard. ",
        author: 'Stella Adler'
      },
      {
        text: "Democratic way to coordinate",
        author: 'Eddy Arnold'
      }
    ],
    day: "September 23"
  },
  {
    meet: [
      {
        text: "Interesting presentation   ",
        author: 'Barak Abama'
      }
    ],
    day: "September 1"
  }
];

var returnObj = JSON.parse(localStorage.getItem("Meetings")) // из локалхоста
if (returnObj) {
  datas = returnObj
}


export function getRecByDate(val) {
  var recByDate = datas.find(function (rec) {
    return rec.day === val
  })
  return recByDate;
}
export function getBuzy(day) {
  var busy = datas.find(elem => {
      return elem.day === day
    }
)
  return busy
}

export function save(author, text, day) {
  var data = datas.find(elem => elem.day === day
)
  ;
  if (data) {
    data.meet.push({author, text});
  } else {
    datas.push({meet: [{author, text}], day})
  }
  var serialObj = JSON.stringify(datas);
  localStorage.setItem('Meetings', serialObj); // сохраняем
  return datas;
}
