import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const OptionsList = props => (
  <ul>
    {
      props.options.map(o => (
        <li key={o.number} >
          <Option onSelected={props.selectOption} number={o.number} text={o.text} />
        </li>
      ))
    }
  </ul>
);

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default OptionsList;
