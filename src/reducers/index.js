import {combineReducers} from 'redux';
import days from './days';
import records from './records';
import editMode from './editMode';
import editContent from './editContent';

export default combineReducers({
  days,
  records,
  editMode,
  editContent
})
