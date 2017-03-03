/**
 * Вместо базы данных используем локалхост
 */
export var datas = [
  {
    day: "September 23",
    meet: [
      {
        text: "Sheduling a meeting time shouldn't be hard. Sheduling a meeting time shouldn't be hard.Sheduling a meeting time shouldn't be hard.Sheduling a meeting time shouldn't be hard. ",
        author: 'Stella Adler'
      },
      {
        text: "Democratic way to coordinate",
        author: 'Eddy Arnold'
      }
    ]
  },
  {
    day: "September 1",
    meet: [
      {
        text: "Interesting presentation   ",
        author: 'Barak Abama'
      }
    ]
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

// добавляем в
export function save(author, text, day) {
  var data = datas.find(elem => elem.day === day)  ;
  if (data) {
    data.meet.push({author, text});
  } else {
    datas.push({meet: [{author, text}], day})
  }
  localStorageSAVE(datas);
  return datas;
}

export function del(text, author, day){
  var newDatas=[]
  datas.map(data=>{
    var newMeet=[];
    var message = data.meet.find(elem=>{
      if(!(elem.text===text && elem.author===author)){
        newMeet.push(elem)
      }
    })
    if(newMeet.length>0)newDatas.push({day:data.day, meet:newMeet})
  })
  datas = newDatas
  localStorageSAVE(datas)
  return newDatas
}




function localStorageSAVE(){
  var serialObj = JSON.stringify(datas);
  localStorage.setItem('Meetings', serialObj); // сохраняем
}
