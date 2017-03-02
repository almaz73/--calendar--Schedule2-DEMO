import React, { Component } from 'react';
import Calendar from './Calendar';
import Meet from './Meet';


class App extends Component {
  render() {
    return (
        <div className="layout">
         <div className="col1"></div>
         <div className="col2">
          <Calendar/>
         </div>
         <div className="col3">
          <button className="col3-button">CREATE</button>
          <Meet />
         </div>
        </div>
    );
  }
}

export default App;
