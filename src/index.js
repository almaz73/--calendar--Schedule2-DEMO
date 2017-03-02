import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';


const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(function(){
	// console.log(" ===state=== ", store.getState());
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root'));


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root2'));
