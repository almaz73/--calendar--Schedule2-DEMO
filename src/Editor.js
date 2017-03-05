import React, {Component} from 'react';
import {connect} from 'react-redux';


class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRequireName: false,
      isRequireArea: false
    }
  }

  onSave() {
    this.onCheck();
    if (this.nameInput.value === "" || this.areaInput.value === "") return;

    var day = this.props.records.day;

    this.props.saveMeet(
      this.nameInput.value,
      this.areaInput.value,
      day,
      this.props.editContent.oldAuthor,
      this.props.editContent.oldText
    )
  }

  onCheck() {
    this.setState({isRequireName: this.nameInput.value === ""});
    this.setState({isRequireArea: this.areaInput.value === ""});
    this.props.onChangeFields(this.nameInput.value, this.areaInput.value);
  }

  onCancel(){
    this.props.onCancelFields(
      this.props.editContent.oldAuthor,
      this.props.editContent.oldText
    )
  }


  render() {
    var
      day = this.props.records.day,
      requireName = "edit-input ",
      requireNemePar = "edit-temp red ",
      requireArea = "edit-input edit-input-area ",
      inputText = this.props.editContent.author,
      areaText = this.props.editContent.text;

    requireName += this.state.isRequireName ? 'red' : '';
    requireArea += this.state.isRequireArea ? 'red' : '';
    requireNemePar+=this.state.isRequireName?'':'hide';

    return (
      <form  className="edit">
        <div  className="edit-title"> New meeting on {day.slice(0,-4)}</div>
        <div className="edit-temp">Participant</div>
        <input
          className={requireName}
          placeholder="Name"
          ref={(input) => this.nameInput = input}
          onChange={this.onCheck.bind(this)}
          value={inputText}
        />
        <div className={requireNemePar}>Participant is required</div>
        <div className="edit-temp">Description</div>
        <textarea
          className={requireArea}
          placeholder="Meeting description"
          ref={(input) => this.areaInput = input}
          onChange={this.onCheck.bind(this)}
          value={areaText}
        />
        <div className="edit-button close" onClick={this.props.changeMode}></div>
        <div className="edit-button save" onClick={this.onSave.bind(this)}>SAVE</div>
        <div className="edit-button cancel" onClick={this.onCancel.bind(this)}>CANCEL</div>
      </form>
    );
  }
}



export default connect(
  state=>({
    records:state.records,
    editContent: state.editContent
  }),
  dispatch=>({
    changeMode: (val)=>{
      dispatch({type:"TOGGLE_EDIT"})
    },
    saveMeet: (author, text, day, oldAuthor, oldText)=>{
      dispatch({type:"SAVE_MEET", author, text, day, oldAuthor, oldText})
      dispatch({type:"TOGGLE_EDIT", mode:false})
      dispatch({type:"GET_DAY", day})
      dispatch({type:"UPDATE_BUSY_DAYS"})
    },
    onChangeFields:(author, text)=>{
      dispatch({type:"EDIT_CHANGE", author, text})
    },
    onCancelFields:(oldAuthor, oldText)=>{
      dispatch({type:"EDIT_CHANGE",
        author:oldAuthor,
        text:oldText,
        oldAuthor,
        oldText
      })
    }
  })
)(Editor);
