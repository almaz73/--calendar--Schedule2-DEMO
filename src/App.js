import React, { Component } from 'react';
import {connect} from 'react-redux';
import Calendar from './Calendar';
import Meet from './Meet';
import Editor from './Editor';


class App extends Component {


  render() {

    var editMode = this.props.editMode;

    return (
        <div className="layout">
         <div className="col1"></div>
         <div className="col2">
          <Calendar/>
         </div>
         <div className="col3">

          {editMode && <Editor/>}
          {!editMode && <Meet/>}
         </div>
        </div>
    );
  }
}

export default connect(
  state=>({
    editMode:state.editMode
  }),
  dispatch=>({
    // onload:()=>{
    //   dispatch({type:"UPDATE_DATE", payload:''})
    // }
    // changeMode: (val)=>{
    //   dispatch({type:"TOGGLE_EDIT"})
    // }
  })
)(App);
