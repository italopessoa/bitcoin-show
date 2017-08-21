import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const OptionsList = (props) => {
  return (
    <ul>
      {
        props.options.map(o => (
          <li key={o.number} ><Option number={o.number} text={o.text} /></li>
        ))
      }
    </ul>
  );
};

OptionsList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default OptionsList
