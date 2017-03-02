var moment = require('moment');


export var datas = [
  {
    meet:[
      {
        text:"Sheduling a meeting time shouldn't be hard.  ",
        author:'Stella Adler'
      },
      {
        text:"Democratic way to coordinate",
        author:'Eddy Arnold'
      }
    ],
    day:"September 23"
  },
  {
    meet:[
      {
        text:"Interesting presentation   ",
        author:'Barak Abama'
      }
    ],
    day:"September 1"
  }
]



// export function getRecByDate(val){
//   var dateFind = new Date("2017-02-"+val);
//   var recByDate = initialState.filter(function(rec){
//     return Math.abs(new Date(rec.date).getTime()-dateFind.getTime())-86400000<0
//   })
//   return recByDate;
// }





//сериализуем его
var serialObj = JSON.stringify(datas);


//Добавляем или изменяем значение:
localStorage.setItem('Meetings', serialObj);


var returnObj = JSON.parse(localStorage.getItem("Meetings")) //спарсим его обратно объект


window.DDD = moment
// DDD.locale('ru')
// DDD('01.12.2017 13:00').format('LLLL')
// DDD('2016-01-12 12:00').add('minutes', 1).format('LLLL')

//DDD().format('dddd,  MMM YYYY')    //"среда, март 2017"