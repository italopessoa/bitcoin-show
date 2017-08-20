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

export default OptionsList;
