import React, { Component } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ModalAddEvent from './ModalAddEvent/ModalAddEvent';
import ModalBody from './ModalBody/ModalBody';
import ModalFooter from './ModalFooter/ModalFooter';

import classes from './Modal.module.css';

class Modal extends Component {
  // constructor(props) {
  //   super(props);
  // }

  toggleModal = (value) => {
    this.props.onToggleModal(value);
  }

  chooseTheme = (value) => {
    this.props.onChooseTheme(value);
  }

  inputEvent = (value) => {
    this.props.onInputEvent(value);
  }

  addNewEvent = () => {
    this.props.onAddNewEvent(this.props.selectedDay, '', this.props.themes[0]);
  }

  editEvent = (event) => {
    this.props.onEditEvent(event);
  }

  changeTheme = (value, event) => {
    this.props.onChangeTheme(value, event);
  }

  changeEventName = (value, event) => {
    this.props.onChangeEventName(value, event);
  }

  deleteEvent = (event) => {
    this.props.onDeleteEvent(event);
  }

  filterThemes = (value) => {
    this.props.onFilterThemes(value);
  }

  render() {
    const { day, month } = this.props.selectedDay;
    const themes = this.props.themes;
    const selectedTheme = this.props.selectedTheme;
    const newEvent = this.props.newEvent;
    const selectedDay = this.props.selectedDay;
    const selectedThemeByFilter = this.props.selectedThemeByFilter;

    return (
      <div className={classes.Backdrop}>
        <div className={classes.Modal}>

          <ModalHeader 
            day={day}
            month={month} 
          />

          <ModalAddEvent 
            themes={themes} 
            selectedTheme={selectedTheme} 
            newEvent={newEvent}
            onChooseTheme={this.chooseTheme}
            onInputEvent={this.inputEvent}
            onAddNewEvent={this.addNewEvent}
          />

          <ModalBody 
            selectedDay={selectedDay} 
            themes={themes}
            onEditEvent={this.editEvent}
            onChangeTheme={this.changeTheme}
            onChangeEventName={this.changeEventName}
            onDeleteEvent={this.deleteEvent}
          />
            
          <ModalFooter 
            selectedThemeByFilter={selectedThemeByFilter} 
            themes={themes}
            onFilterThemes={this.filterThemes}
            onToggleModal={this.toggleModal}
          />

        </div>
      </div>
    );
  }
}

export default Modal;