import React, { Component } from 'react';
import './App.css';

import Year from './components/Year/Year';
import Modal from './components/Modal/Modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenModal: false,
      selectedDay: {
        day: '',
        month: '',
        events: []
      },
      theme: '',
      newEvent: '',
      themes: ['holiday', 'birthday', 'meeting'],
      selectedTheme: 'holiday',
      selectedThemeByFilter: '',
      year: [
        { 
          month: 'January', 
          events: [
            {day: 1, events: [ {id: this.uniqueId(), name: 'ololo holiday', theme: 'holiday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'}, {id: this.uniqueId(), name: 'ololo holiday', theme: 'holiday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'}, {id: this.uniqueId(), name: 'ololo birthday', theme: 'birthday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'} ]},
            {day: 2, events: [ {id: this.uniqueId(), name: 'kokoko birthday', theme: 'birthday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'}, {id: this.uniqueId(), name: 'kokoko holiday', theme: 'holiday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'} ]},
            {day: 3, events: [ {id: this.uniqueId(), name: 'ololokokoko meeting', theme: 'meeting', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'}, {id: this.uniqueId(), name: 'ololokokoko holiday', theme: 'holiday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'} ]},
            {day: 4, events: [ {id: this.uniqueId(), name: 'wow holiday', theme: 'holiday', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'}, {id: this.uniqueId(), name: 'wow meeting', theme: 'meeting', isDisabledSelectEvent: 'disabled', isDisabledEventName: 'disabled'} ]},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []}
          ] 
        },
        {
          month: 'February', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []}
          ] 
        },
        { 
          month: 'March', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []}
          ] 
        },
        { 
          month: 'April', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []}
          ] 
        },
        { 
          month: 'May', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []}
          ] 
        },
        { 
          month: 'June', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []}
          ] 
        },
        { 
          month: 'July', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []}
          ] 
        },
        { 
          month: 'August', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []}
          ] 
        },
        { 
          month: 'September', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []}
          ] 
        },
        { 
          month: 'October', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []}
          ] 
        },
        { 
          month: 'November', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []}
          ] 
        },
        { 
          month: 'December', 
          events: [
            {day: 1, events: []},
            {day: 2, events: []},
            {day: 3, events: []},
            {day: 4, events: []},
            {day: 5, events: []},
            {day: 6, events: []},
            {day: 7, events: []},
            {day: 8, events: []},
            {day: 9, events: []},
            {day: 10, events: []},
            {day: 11, events: []},
            {day: 12, events: []},
            {day: 13, events: []},
            {day: 14, events: []},
            {day: 15, events: []},
            {day: 16, events: []},
            {day: 17, events: []},
            {day: 18, events: []},
            {day: 19, events: []},
            {day: 20, events: []},
            {day: 21, events: []},
            {day: 22, events: []},
            {day: 23, events: []},
            {day: 24, events: []},
            {day: 25, events: []},
            {day: 26, events: []},
            {day: 27, events: []},
            {day: 28, events: []},
            {day: 29, events: []},
            {day: 30, events: []},
            {day: 31, events: []},
          ],
        }
      ]
    }
  }

  uniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  toggleModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal
    });

    this.setState(state => {
      const events = state.selectedDay.events.map(event => {
        if (!event.isDisabledEventName || !event.isDisabledSelectEvent) {
          event.isDisabledEventName = event.isDisabledSelectEvent = 'disabled';
        }
      });

      return events;
    });
  }

  selectDay = (day, month, events) => {
    this.setState({
      selectedDay: {
        day: day,
        month: month,
        events: events
      }
    });
  }

  chooseTheme = (value) => {
    this.setState({
      selectedTheme: value
    });
  }

  inputEvent = (value) => {
    this.setState({
      newEvent: value
    });
  }

  addNewEvent = (e) => {
    if (this.state.newEvent) {
      this.state.selectedDay.events.push({
        id: this.uniqueId(), 
        name: this.state.newEvent, 
        theme: this.state.selectedTheme,
        isDisabledEventName: 'disabled',
        isDisabledSelectEvent: 'disabled'
      });

      this.setState({
        selectedDay: this.state.selectedDay,
        newEvent: '',
        selectedTheme: this.state.themes[0]
      });
    } else {
      return false;
    }
  }

  editEvent = (event) => {
    this.setState(state => {
      const eventsList = state.selectedDay.events.map(item => {
        if (item.id === event.id) {
          item.isDisabledEventName === 'disabled' ? item.isDisabledEventName = null : item.isDisabledEventName = 'disabled';
          item.isDisabledSelectEvent === 'disabled' ? item.isDisabledSelectEvent = null : item.isDisabledSelectEvent = 'disabled';
        }
      });

      return eventsList;
    });
  }

  changeTheme = (value, event) => {
    this.setState(state => {
      const themesList = state.selectedDay.events.map(item => {
        if (item.id === event.id) {
          item.theme = value;
        }
      });

      return themesList;
    });
  }

  changeEventName = (value, event) => {
    this.setState(state => {
      const eventsList = state.selectedDay.events.map(item => {
        if (item.id === event.id) {
          item.name = value
        }
      });

      return eventsList;
    });
  }

  deleteEvent = (event) => {
    this.state.selectedDay.events.map( (ev, idx) => {
      if (ev.id === event.id) {
        this.state.selectedDay.events.splice(idx, 1);
      }
    } );

    this.setState({
      selectedDay: this.state.selectedDay
    });
  }

  filterThemes = (value) => {
    this.state.selectedThemeByFilter = value;

    if (this.state.selectedThemeByFilter === 'all') {
      this.setState({
        selectedDay: {
          day: this.state.selectedDay.day,
          month: this.state.selectedDay.month,
          events: this.state.selectedDay.events
        }
      })
      console.log(this.state.selectedDay.events)
    } else {
      this.setState(state => {
        const eventFind = state.selectedDay.events.filter(item => {
          return item.theme === this.state.selectedThemeByFilter;
        });
  
        console.log(eventFind); // выводит всё правильно, но не меняется состояния
        return eventFind;
      });
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isOpenModal ?
          <Modal 
            selectedDay={this.state.selectedDay} 
            selectedTheme={this.state.selectedTheme}
            themes={this.state.themes}
            newEvent={this.state.newEvent}
            selectedThemeByFilter={this.state.selectedThemeByFilter}
            onToggleModal={this.toggleModal} 
            onChooseTheme={this.chooseTheme}
            onInputEvent={this.inputEvent}
            onAddNewEvent={this.addNewEvent}
            onEditEvent={this.editEvent}
            onChangeTheme={this.changeTheme}
            onChangeEventName={this.changeEventName}
            onDeleteEvent={this.deleteEvent}
            onFilterThemes={this.filterThemes}
          /> : null
        }

        <Year 
          year={this.state.year} 
          onToggleModal={() => this.toggleModal()} 
          onSelectDay={this.selectDay}
        />
      </div>
    );
  }
}

export default App;
