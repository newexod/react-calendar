import React, { Component } from 'react';

import classes from './ModalFooter.module.css';

class ModalFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: props.isOpenModal
    }
  }

  toggleModal = () => {
    this.props.onToggleModal(this.state.isOpenModal)
  }

  filterThemes = (e) => {
    this.props.onFilterThemes(e.target.value);
  }

  render() {
    const selectedThemeByFilter = this.props.selectedThemeByFilter;
    const themes = this.props.themes;

    return (
      <div className={classes.ModalFooter}>
        <div>
          Filter by &nbsp;
          <select value={selectedThemeByFilter} onChange={(e) => this.filterThemes(e)}>
            <option value="all">all</option>
            {themes.map((theme, idx) => {
              return (
                <option key={idx + 1} value={theme}>{theme}s</option>
              );
            })}
          </select>
        </div>
        <div>
          <button onClick={this.toggleModal}>
            Close
          </button>
        </div>
      </div>
    );
  }

}

export default ModalFooter;