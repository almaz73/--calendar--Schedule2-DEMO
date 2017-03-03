/**
* редюсер, который будет отражать состояние полей окна редактира
*/
var initialState = {author:"", text:"", oldAuthor:"", oldText:""}

export default function myReducer(state = initialState, action) {
  if (action.type === "EDIT_CHANGE") {

    if(action.oldAuthor!==undefined && action.oldText!==undefined){
      return{
        author:action.author,
        text:action.text,
        oldAuthor:action.oldAuthor,
        oldText:action.oldText
      }
    }else{
      return{
        ...state,
        author:action.author,
        text:action.text
      }
    }
  }
  return state;
}
