import React, { Component } from 'react';

import classes from './ModalAddEvent.module.css';

class ModalAddEvent extends Component {
  chooseTheme = (e) => {
    this.props.onChooseTheme(e.target.value);
  }

  inputEvent = (e) => {
    this.props.onInputEvent(e.target.value);
  }

  addNewEvent = () => {
    this.props.onAddNewEvent(this.props.selectedDay, '', this.props.themes[0]);
  }

  render() {
    const themes = this.props.themes;
    const selectedTheme = this.props.selectedTheme;
    const newEvent = this.props.newEvent;

    return (
      <div className={classes.AddEvent}>
        <select value={selectedTheme} onChange={(e) => this.chooseTheme(e)}>
          {themes.map((theme, idx) => {
            return (
              <option 
                key={idx + 1} 
                value={theme} 
              >{theme}</option>
            );
          })}
        </select>
        <input type="text" value={newEvent} onChange={(e) => this.inputEvent(e)}/>
        <button onClick={() => this.addNewEvent()}>Add New</button>
      </div>
    );
  } 
}

export default ModalAddEvent;