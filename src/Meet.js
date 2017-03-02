import React, { Component } from 'react';
import {connect} from 'react-redux';


class Meet extends Component {
  render() {
    var
      days=this.props.meetDate.day,
      list="Nothing planned";


console.log("#43434=", this.props.meetDate)


    return (
      <div className="meet">
        <div className="meet-title">{days}</div>

        <div className="meet-content">
          {
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






          {this.props.meetDate.meet.length===0 && list}
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
    // onAdd: (val)=>{
    //   dispatch({type:"ADD_TEXT", text:val})
    // }
  })
)(Meet);
