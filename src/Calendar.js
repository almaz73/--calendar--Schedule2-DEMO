/**
* Каленьдарь,
 * TODO для доработки нужно научить прыгать по дням в редюссере days
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';


class Calendar extends Component {
  onChoiseDate(val) {
    this.props.onGetDay(val)
  }

  render() {
    var
      self = this,
      days = this.props.days,
      black,
      dayWithMeet = [],
      dayPoint = this.props.meetDate.day;


    if (typeof(this.props.meetDate.day) !== "string") {
      dayPoint = this.props.meetDate.day[0]
    }

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
          days.map((elem, index)=>{
            var day = elem.day;
            var busy = elem.busy;

            if(day.replace(/\D+/g,"")==="1"){
              black=!black?true:false;
            }

            return(
              <div key={index}>
              <div
                className={black?"black":""}
                title={day}
                onClick={self.onChoiseDate.bind(self, day)}
              >
                {day.replace(/\D+/g,"")}

              </div>
              {busy?<span className="dot"></span>:""}
              {dayPoint===day?<span className="circle"></span>:""}
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
    days:state.days,
    meetDate:state.meet
  }),
  dispatch=>({
    onGetDay: (val)=>{
      dispatch({type:"TOGGLE_EDIT", mode:false})
      dispatch({type:"GET_DAY", payload:val})
    }
  })
)(Calendar);
