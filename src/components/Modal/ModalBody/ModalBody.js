import React, { Component } from 'react';

import classes from './ModalBody.module.css';

class ModalBody extends Component {
  editEvent = (event) => {
    this.props.onEditEvent(event);
  }

  changeTheme = (e, event) => {
    this.props.onChangeTheme(e.target.value, event);
  }

  changeEventName = (e, event) => {
    this.props.onChangeEventName(e.target.value, event);
  }

  deleteEvent = (event) => {
    this.props.onDeleteEvent(event);
  }

  render() {
    const selectedDay = this.props.selectedDay;
    const themes = this.props.themes;

    return (
      <div className={classes.ModalBody}>
        <ul className={classes.Events}>
          {selectedDay.events.map( (event, eventIdx) => {
            return (
              <li 
                className={classes.Event}
                key={eventIdx}
              >
                <select value={event.theme} onChange={(e) => this.changeTheme(e, event)} disabled={event.isDisabledSelectEvent}>
                  {themes.map((theme, idx) => {
                    return (
                      <option key={idx + 1} value={theme}>{theme}</option>
                    );
                  })}
                </select>
                <input value={event.name} onChange={(e) => this.changeEventName(e, event)} disabled={event.isDisabledEventName} />
                <div>
                  <button 
                    className={classes.EventEdit} 
                    onClick={() => this.editEvent(event)}
                  >
                    {event.isDisabledEventName === 'disabled' ? 'Edit' : 'Done'}
                  </button>
                  <button 
                    className={classes.EventEdit} 
                    onClick={() => this.deleteEvent(event)}
                  >
                    X
                  </button>
                </div>
              </li>
            );
          } )}
        </ul>
      </div>
    );
  }

}

export default ModalBody;