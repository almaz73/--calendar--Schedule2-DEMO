/**
* Каленьдарь,
 * TODO для доработки нужно научить прыгать по дням в редюссере days
*/

import React, {Component} from 'react';
import {connect} from 'react-redux';


class Calendar extends Component {
  onChoiseDate(day) {
    this.props.onGetDay(day)
  }

  render() {
    var
      self = this,
      days = this.props.days,
      black,
      dayPoint = this.props.records.day;

    return (
      <div className="calendar">
        <div className="calendar-title">
          <button className="leftBt"></button>
          <button className="month">SEP 2016</button>
          <button className="rightBt"></button>
        </div>
        <pre className="calendar-weeknames">MON       TUE      WED      THU      FRI      SAT       SUN</pre>

        <div className="calendar-hr"></div>
        <div className="calendar-table">
        {
          days.map((elem, index)=>{
            var
              day = elem.day,
              busy = elem.busy;

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
    )
  }
}


export default connect(
  state=>({
    days:state.days,
    records:state.records
  }),
  dispatch=>({
    onGetDay: (day)=>{
      dispatch({type:"TOGGLE_EDIT", mode:false})
      dispatch({type:"GET_DAY", day})
    }
  })
)(Calendar);
