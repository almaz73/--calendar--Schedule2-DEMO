import {combineReducers} from 'redux';
import days from './days';
import records from './records';
import editMode from './editMode';

export default combineReducers({
  days,
  records,
  editMode
})
