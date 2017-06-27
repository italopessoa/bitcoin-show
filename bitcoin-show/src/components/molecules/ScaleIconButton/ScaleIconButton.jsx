import React, { Component } from 'react';
import Icon from '../../atoms/Icon/Icon';
import './ScaleIconButton.css'
class ScaleIconButton extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 2 };
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.scaleIn !== this.props.scaleIn;
  }
  componentWillUpdate() {
    console.log('renderizando ScaleIconButton');
  }
  getClassName() {
    return `${this.props.className} ${(this.props.scaleIn ? ' scale-transition scale-in' : ' scale-transition scale-out')}`;
  }
  render() {
    return (
      <a
        onClick={() => this.props.onClick()}
        id="btnCheckAnswer" 
        className={this.getClassName()}>
        <Icon
          className={this.props.iconClassName}
          icon={this.props.icon}
        />
      </a>
    );
  }
}

export default ScaleIconButton;
