import React, { Component } from 'react';

import Week from './Week/Week';
import Days from './Days/Days';

import classes from './Month.module.css';

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
    const monthItem = this.props.month;

    return (
      <li className={classes.Month}>
        <h3 className={classes.Title}>{monthItem.month}</h3>

        <Week />

        <Days 
          month={monthItem} 
          onToggleModal={() => this.toggleModal()} 
          onSelectDay={this.selectDay}  
        />
      </li>
    );
  }
}

export default Month;