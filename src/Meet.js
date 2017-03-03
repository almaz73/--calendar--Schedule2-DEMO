/**
 * Отображение встреч
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Meet extends Component {

  onDelete(val){
    var day = this.props.meetDate.day;
    if (typeof(this.props.meetDate.day) !== "string") {
      day = this.props.meetDate.day[0]
    }
    this.props.deleteMeet(val, day);
  }
  onEdit(val){
    console.log(" onEdit = ", val);
  }

  render() {
    var
      self = this,
      day = this.props.meetDate.day,
      list = "Nothing planned";

    return (
      <div className="meet">
        <div
          className="col3-button"
          onClick={this.props.changeMode}
        >CREATE</div>
        <div className="meet-title">{day}</div>
        <div className="meet-content">
          {
            this.props.meetDate.meet &&
            this.props.meetDate.meet.map((meet, index)=>{
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

          {!this.props.meetDate.meet && list}
        </div>
      </div>
    );
  }
}



export default connect(
  state=>({
    meetDate:state.records
  }),
  dispatch=>({
    changeMode: (val)=>{
      dispatch({type:"TOGGLE_EDIT"})
    },
    deleteMeet: (meet, day)=>{
      dispatch({type:"DELETE_MEET", meet, day})
      dispatch({type:"GET_DAY", payload:day})
      dispatch({type:"UPDATE_DATE", payload:day})
    }
  })
)(Meet);
