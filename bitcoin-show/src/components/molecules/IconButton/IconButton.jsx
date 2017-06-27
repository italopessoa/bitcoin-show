import React from 'react';
import Icon from '../../atoms/Icon/Icon';

const IconButton = props => (
  <a>
    <Icon className={props.className} icon={props.icon} />
  </a>
);

export default IconButton;
