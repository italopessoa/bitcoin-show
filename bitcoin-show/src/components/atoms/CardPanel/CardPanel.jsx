import React, { Component } from 'react';
import './CardPanel.css';

class CardPanel extends Component {
  constructor(props) {
    super(props);
    this.onClickEvent = this.onClickEvent.bind(this);
  }
  onClickEvent() {
    return this.props.onClickHandler ? this.props.onClickHandler(this.props.onClickArgs) : null;
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
