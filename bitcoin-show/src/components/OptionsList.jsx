import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const OptionsList = props => (
  <ul>
    {
      props.options.map(option => (
        <li key={option.number} >
          <Option onSelected={props.selectOption} option={option} />
        </li>
      ))
    }
  </ul>
);

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default OptionsList;
