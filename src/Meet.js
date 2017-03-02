import React, { Component } from 'react';
import {connect} from 'react-redux';


class Meet extends Component {
  render() {
    var
      days=this.props.meetDate.day,
      list="Nothing planned";

    return (
      <div className="meet">
        <div
          className="col3-button"
          onClick={this.props.changeMode}
        >CREATE</div>
        <div className="meet-title">{days}</div>
        <div className="meet-content">
          {
            this.props.meetDate.meet &&
            this.props.meetDate.meet.map((meet, index)=>{
              return(
                <div className="meet-one" key={index}>
                  <div className="meet-text">
                    <button className="meet-add"></button>
                    <button className="meet-delete"></button>
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
    meetDate:state.meet
  }),
  dispatch=>({
    changeMode: (val)=>{
      dispatch({type:"TOGGLE_EDIT"})
    }
  })
)(Meet);
