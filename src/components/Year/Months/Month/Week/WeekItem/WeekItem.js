import React, { Component } from 'react';

class WeekItem extends Component {
  render() {
    const weekDay = this.props.weekDay

    return (
      <li className={weekDay}>{weekDay}</li>
    );
  }
}

export default WeekItem;