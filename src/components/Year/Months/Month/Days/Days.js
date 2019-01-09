import React, { Component } from 'react';

import Day from './Day/Day';

import classes from './Days.module.css';

class Month extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: props.isOpenModal
    }
  }

  toggleModal = () => {
    this.props.onToggleModal(this.state.isOpenModal);
  }

  selectDay = (day, month, events) => {
    this.props.onSelectDay(day, month, events)
  }

  render() {
    const month = this.props.month;
    const monthName = this.props.month.month;
    const days = month.events.map((day, dayIdx) => {
      return (
        <Day 
          day={day.day} 
          monthName={monthName} 
          events={day.events}
          key={dayIdx} 
          onToggleModal={() => this.toggleModal()}
          onSelectDay={this.selectDay}
        />
      );
    });

    return (
      <ul className={classes.Days}>
        {days}
      </ul>
    );
  }
}

export default Month;