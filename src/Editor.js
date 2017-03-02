import React, { Component } from 'react';
import {connect} from 'react-redux';


class Editor extends Component {
  render() {
    return (
      <div className="edit">
        <div  className="edit-title"> New meeting on September 22 </div>
        <div className="edit-temp">Participant</div>
        <input className="edit-input" placeholder="Name" />
        <div className="edit-temp red">Participant is required</div>

        <div className="edit-temp">Description</div>
        <textarea className="edit-input edit-input-area" placeholder="Meeting description" />

        <div className="edit-button close" onClick={this.props.changeMode}>X</div>
        <div className="edit-button save">SAVE</div>
        <div className="edit-button cansel">CANSEL</div>
      </div>
    );
  }
}



export default connect(
  state=>({
    // meetDate:state.edit
  }),
  dispatch=>({
    changeMode: (val)=>{
      dispatch({type:"TOGGLE_EDIT"})
    }
  })
)(Editor);
