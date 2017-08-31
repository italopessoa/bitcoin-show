import React from 'react';
import PropTypes from 'prop-types';


const Option = props => (
  <div>
    {/* <button >
        Option {props.number}
      </button> */}
    <h6>{props.text}</h6>
  </div>
);

Option.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Option;
