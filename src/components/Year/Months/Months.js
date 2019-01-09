import React, { Component } from 'react';

import Month from './Month/Month';

import classes from './Months.module.css';

class Months extends Component {
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
    return (
      <ul className={classes.Months}>
        {this.props.year.map((monthItem, monthIdx) => {
          return (
            <Month 
              month={monthItem} 
              key={monthIdx} 
              onToggleModal={() => this.toggleModal()} 
              onSelectDay={this.selectDay}
            />
          );
        })}
      </ul>
    );
  }
}

export default Months;