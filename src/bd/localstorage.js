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

// из локалхоста забираем сохраненный json
var returnObj = JSON.parse(localStorage.getItem("Meetings")) // из локалхоста
if (returnObj && returnObj.length>0) {
  datas = returnObj
}

// по дате получим данные на этот день
export function getRecByDate(day) {
  var recByDate = datas.find(rec => rec.day === day)
  return recByDate;
}

//функция определения наличия записей за выбранный день
export function getBuzy(day) {
  return datas.find(elem => elem.day === day)
}

// добавляем в json и сохраняем в локалхосте
export function save(author, text, day, oldAuthor, oldText) {
  var data = datas.find(elem => elem.day === day);
  if(oldAuthor!=="" && oldText!==""){
    // отредактированная запись
    // var elem = datas.find(elem=>elem.day===day)
    var newDatas=[];
    datas.map(data=>{
      var newMeet=[];
      data.meet.find(elem=>{
        if(!(elem.text===oldText && elem.author===oldAuthor)){
          newMeet.push(elem)
        }else{
          newMeet.push({ text, author })
        }
        return false;
      });
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
    data.meet.find(elem=>{
      if(!(elem.text===text && elem.author===author)){
        newMeet.push(elem)
      }
      return false;
    })
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
  localStorage.setItem('Meetings', serialObj); // сохраняем
}
