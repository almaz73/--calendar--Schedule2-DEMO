import {combineReducers} from 'redux';
import records from './records';
import editMode from './editMode';
import calendar from './calendar';
import editContent from './editContent';

export default combineReducers({
  records,
  calendar,
  editMode,
  editContent,
})
