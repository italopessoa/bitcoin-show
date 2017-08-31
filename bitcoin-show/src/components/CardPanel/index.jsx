import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardPanel extends Component {
  render() {
    return (
      <div
        className={`card-panel  ${this.props.className}`}
      >
        {this.props.content}
      </div>);
  }
}

export default CardPanel;

CardPanel.propTypes = {
  content: PropTypes.element.isRequired,
  className: PropTypes.string,
};

CardPanel.defaultProps = {
  id: '',
  className: '',
  onClickHandler: null,
  onClickArgs: {},
};
