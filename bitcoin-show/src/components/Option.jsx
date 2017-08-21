import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
  <div>
    <label>Option {props.number}: </label>{props.text}
  </div>
);

Option.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}
export default Option;
