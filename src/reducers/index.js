import {combineReducers} from 'redux';
import days from './days';
import meet from './meet';
import editMode from './editMode';

export default combineReducers({
	days,
	meet,
	editMode
})
