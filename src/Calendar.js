import React, { Component } from 'react';
import {connect} from 'react-redux';


class Calendar extends Component {
  onChoiseDate(val){
    this.props.onGetDay(val)
  }
  render() {
    var
      self=this,
      days=this.props.days,
      black;


    return (
      <div className="calendar">
        <div className="calendar-title">
          <button className="leftBt"></button>
          <button className="month">SEP 2016</button>
          <button className="rightBt"></button>
        </div>
        <pre className="calendar-weeknames">MON       TUE      WED      THU      FRI      SAT       SUN</pre>
        <hr />
        <div className="calendar-table">
        {
          days.map((day, index)=>{
            if(day.replace(/\D+/g,"")==="1"){
              black=!black?true:false;
            }

            return(
              <div
                key={index}
                className={black?"black":""}
                title={day}
                onClick={self.onChoiseDate.bind(self, day)}
              >
                {day.replace(/\D+/g,"")}
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}


export default connect(
  state=>({
    days:state.days
  }),
  dispatch=>({
    onGetDay: (val)=>{
      dispatch({type:"GET_DAY", payload:val})
    }
  })
)(Calendar);
