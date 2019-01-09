import React, { Component } from 'react';

import classes from './Day.module.css';

class Day extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: props.isOpenModal
    }
  }

  toggleModal = (day, monthName, events) => {
    this.props.onToggleModal(this.state.isOpenModal);
    this.props.onSelectDay(day, monthName, events);
  }

  switchMonth = (month) => {
    switch(month) {
      case 'February':
        return classes.February;
      case 'March':
        return classes.March;
      case 'April':
        return classes.April;
      case 'May':
        return classes.May;
      case 'June':
        return classes.June;
      case 'July':
        return classes.July;
      case 'August':
        return classes.August;
      case 'September':
        return classes.September;
      case 'October':
        return classes.October;
      case 'November':
        return classes.November;
      case 'December':
        return classes.December;
      default:
        return '';
    }
  }

  render() {
    const { day, monthName, events } = this.props;

    return (
      <li 
        className={classes.Day + ' ' + this.switchMonth(monthName)} 
        onClick={() => this.toggleModal(day, monthName, events)}
      >
        {day}
      </li>
    );
  }
}

export default Day;