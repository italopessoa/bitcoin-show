import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardPanel.css';

class CardPanel extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent() {
    return this.props.onClickHandler ? this.props.onClickHandler(this.props.onClickArgs) : {};
  }
  render() {
    return (
      <div
        className={`card-panel  ${this.props.className}`}
        id={this.props.id}
        onClick={this.onClickEvent}
      >
        {this.props.content}
      </div>);
  }
}

export default CardPanel;

CardPanel.propTypes = {
  id: PropTypes.string,
  content: PropTypes.element.isRequired,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
  // onClickArgs: PropTypes.any,
};

CardPanel.defaultProps = {
  id: '',
  className: '',
  onClickHandler: null,
  onClickArgs: {},
};
