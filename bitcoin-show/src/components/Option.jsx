import React from 'react';
import PropTypes from 'prop-types';

const Option = props => (
  <div>
    <button onClick={() => props.onSelected(props.number)}>Option {props.number}:</button>
    {props.text}
  </div>
);

Option.propTypes = {
  number: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default Option;
