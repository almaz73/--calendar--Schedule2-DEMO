/**
 * Вместо базы данных используем локалхост
 */
var NAMEBD = 'Meetings4';
export var datas = [
  {
    day: "March 8 2017",
    meet: [
      {
        text: "Sheduling a meeting time shouldn't be hard. Sheduling a meeting time shouldn't be hard.Sheduling a meeting time shouldn't be hard.Sheduling a meeting time shouldn't be hard. ",
        author: 'Stella Adler'
      },
      {
        text: "Interesting presentation   ",
        author: 'Barak Abama'
      }
    ]
  },
  {
    day: "March 24 2017",
    meet: [
      {
        text: "Democratic way to coordinate",
        author: 'Eddy Arnold'
      }
    ]
  }
];

// из локалхоста забираем сохраненный json
var returnObj = JSON.parse(localStorage.getItem(NAMEBD)) // из локалхоста
if (returnObj && returnObj.length>0) {
  datas = returnObj
}

// по дате получим данные на этот день
export function getRecByDate(day) {
  for (var a in datas) {
    if (datas[a].day === day) {
      return datas[a]
    }
  }
  //return = datas.find(rec =>rec.day === day) // в ie не поддерживает
}

// добавляем в json и сохраняем в локалхосте
export function save(author, text, day, oldAuthor, oldText) {
  var data;
  // var data = datas.find(elem => elem.day === day);
  for (var a in datas) {
    if (datas[a].day === day) {
      data=datas[a];
      break;
    }
  }

  if(oldAuthor!=="" && oldText!==""){
    // отредактированная запись
    // var elem = datas.find(elem=>elem.day===day)
    var newDatas=[];
    datas.map(data=>{
      var newMeet=[];
      for (var a in data.meet){
        if(!(data.meet[a].text===oldText && data.meet[a].author===oldAuthor)){
          newMeet.push(data.meet[a])
        }else{
          newMeet.push({ text, author })
        }
        break;
      }
      newDatas.push({day:data.day, meet:newMeet})
      return false;
    })
    datas = newDatas;
  }else{
    // новая запись
    if (data) {data.meet.push({author, text});}
    else {datas.push({meet: [{author, text}], day})}
  }

  localStorageSAVE(datas);
  return datas;
}

// удаление записи
export function del(text, author, day){
  var newDatas=[];
  datas.map(data=>{
    var newMeet=[];
    for (var a in data.meet){
      if(!(data.meet[a].text===text && data.meet[a].author===author)){
        newMeet.push(data.meet[a])
      }
      break;
    }
    if(newMeet.length>0)newDatas.push({day:data.day, meet:newMeet})
    return false;
  })
  datas = newDatas;
  localStorageSAVE(datas);
  return newDatas;
}



//cохрянем в локалхост сериализованный json
function localStorageSAVE(){
  var serialObj = JSON.stringify(datas);
  localStorage.setItem(NAMEBD, serialObj); // сохраняем
}
