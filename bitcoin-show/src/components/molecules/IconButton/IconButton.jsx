import React from 'react';
import Icon from '../../atoms/Icon/Icon';

const IconButton = props => (
  <a onClick={props.onClick} data-badge={props.dataBadge} className={props.badge && 'badge1'}>
    <Icon className={props.className} icon={props.icon} />
  </a>
);

export default IconButton;
