import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
  <div>
    <label>Option {props.number}: </label>{props.text}
  </div>
);

export default Option;
