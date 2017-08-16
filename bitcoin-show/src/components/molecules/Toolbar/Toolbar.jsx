import React, { Component } from 'react';
import UList from '../UList/UList';
import IconButton from '../../molecules/IconButton/IconButton';
import './Toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.getItems = this.getItems.bind(this);
  }
  getItems() {
    const items = [];
    items.push(<IconButton onClick={this.props.cardsOnClick} icon="view_carousel" className="material-icons" badge dataBadge={this.props.cardsDataBadge} />);
    items.push(<IconButton className="fa fa fa-graduation-cap" />);
    items.push(<IconButton onClick={this.props.crowdOnClick} className="fa fa-users" badge dataBadge={this.props.crowdDataBadge} />);
    items.push(<IconButton onClick={this.props.passOnClick} className="fa fa-arrow-right" badge dataBadge={this.props.skipDataBadge} />);
    return items;
  }
  render() {
    return (<UList className="right" items={this.getItems()} />);
  }
}

export default Toolbar;
