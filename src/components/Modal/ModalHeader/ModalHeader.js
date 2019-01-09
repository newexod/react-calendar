import React, { Component } from 'react';

import classes from './ModalHeader.module.css';

class ModalHeader extends Component {
  render() {
    return (
      <div className={classes.ModalHeader}>
        <h3>The {this.props.day} of {this.props.month} </h3>
      </div>
    );
  }

}

export default ModalHeader