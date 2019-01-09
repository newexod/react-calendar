import React, { Component } from 'react';

import WeekItem from './WeekItem/WeekItem';

import classes from './Week.module.css';

const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

class Week extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: week
    }
  }

  render() {    
    const week = this.state.week.map( (weekDay, weekDayIdx) => {
      return (
        <WeekItem weekDay={weekDay} key={weekDayIdx} />
      );
    } );

    return (
      <ul className={classes.Week}>
        {week}
      </ul>
    );
  }
}

export default Week;