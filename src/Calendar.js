import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


class Calendar extends Component {
  onChoiseDate(day) {
    this.props.onGetDay(day)
  }
  onLeftMonth(){
    this.props.monthLeft(this.props.records.day)
  }
  onRightMonth(){
    this.props.monthRight(this.props.records.day)
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
          <button
            className="leftBt"
            onClick={this.onLeftMonth.bind(this)}
          ></button>
          <button className="month">{this.props.month.toUpperCase()}</button>
          <button
            className="rightBt"
            onClick={this.onRightMonth.bind(this)}
          ></button>
        </div>
        <pre className="calendar-weeknames">MON      TUE      WED      THU      FRI       SAT      SUN</pre>

        <div className="calendar-hr"></div>
        <div className="calendar-table">
        {
          days.map((elem, index)=>{
            var
              day = elem.day,
              dayText = moment(new Date(day)).format('D'),
              busy = elem.busy;

            if(dayText==="1"){
              black=!black?true:false;
            }

            return(
              <div key={index}>
              <div
                className={black?"black":""}
                title={day}
                onClick={self.onChoiseDate.bind(self, day)}
              >
                {dayText}

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
    days:state.calendar.days,
    month:state.calendar.month,
    records:state.records
  }),
  dispatch=>({
    onGetDay: (day)=>{
      dispatch({type:"TOGGLE_EDIT", mode:false})
      dispatch({type:"GET_DAY", day})
    },
    monthLeft: (day)=>{
      dispatch({type:"MONTH_LEFT", day})
    },
    monthRight: (day)=>{
      dispatch({type:"MONTH_RIGHT", day})
    }
  })
)(Calendar);
