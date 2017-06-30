import React, { Component } from 'react';
import UList from '../UList/UList';
import IconButton from '../../molecules/IconButton/IconButton';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
  }
  getItems() {
    const items = [];
    {
      this.props.isCardsAvailable && items.push(<IconButton onClick={this.props.cardsOnClick} className="material-icons" icon="view_carousel" />);
    }
    items.push(<IconButton className="fa fa fa-graduation-cap" />);
    items.push(<IconButton onClick={this.props.crowdOnClick} className="fa fa-users" />);
    items.push(<IconButton onClick={this.props.passOnClick} className="fa fa-arrow-right" />);

    return items;
  }
  render() {
    return (<UList className="right" items={this.getItems()} />);
  };
}

export default Toolbar;
