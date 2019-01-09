import React, { Component } from 'react';

import Months from './Months/Months';

import classes from './Year.module.css';

class Year extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: props.isOpenModal,
      year: props.year
    }
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);

        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
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
      <div className={classes.Year}>
        <Months 
          year={this.state.year} 
          onToggleModal={() => this.toggleModal()} 
          onSelectDay={this.selectDay}
        />
      </div>
    );
  }
}

export default Year;