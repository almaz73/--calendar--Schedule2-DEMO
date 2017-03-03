import React, {Component} from 'react';
import {connect} from 'react-redux';

class Meet extends Component {
  onDelete(val){
    var day = this.props.records.day;
    this.props.deleteMeet(val, day);
  }
  onEdit(meet){
    this.props.editMeet(meet.author, meet.text);
  }

  render() {
    var
      self = this,
      list = "Nothing planned",
      day = this.props.records.day;

    return (
      <div className="meet">
        <div
          className="col3-button"
          onClick={this.props.changeMode}
        >CREATE</div>
        <div className="meet-title">{day}</div>
        <div className="meet-content">
          {
            this.props.records.meet &&
            this.props.records.meet.map((meet, index)=>{
              return(
                <div className="meet-one" key={index}>
                  <div className="meet-text">
                    <button
                      className="meet-add"
                      title="Редактировать"
                      onClick={self.onEdit.bind(self, meet)}
                    ></button>
                    <button
                      className="meet-delete"
                      title="Удалить"
                      onClick={self.onDelete.bind(self, meet)}
                    ></button>
                    {meet.text}
                  </div>
                  <div className="meet-author">
                    {meet.author}
                  </div>
                  <div className="clearfix"></div>
                </div>
              )
            })
          }
          {!this.props.records.meet && list}
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({
    records:state.records
  }),
  dispatch=>({
    changeMode: (val)=>{
      dispatch({
        type:"EDIT_CHANGE",
        oldAuthor:"",
        oldText:"",
        author:"",
        text:""
      })
      dispatch({type:"TOGGLE_EDIT"})
    },
    deleteMeet: (meet, day)=>{
      dispatch({type:"DELETE_MEET", meet, day})
      dispatch({type:"GET_DAY", day})
      dispatch({type:"UPDATE_DATE"})
    },
    editMeet: (author, text)=>{
      dispatch({
        type:"EDIT_CHANGE",
        author,
        text,
        oldAuthor:author,
        oldText:text
      })
      dispatch({type:"TOGGLE_EDIT", mode:true})
    }
  })
)(Meet);
