import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  selected: {
    background: 'green',
  },
};

const Option = (props) => {
  const { selected } = styles;
  return (
    <div style={props.option.selected && selected}>
      <button onClick={() => props.onSelected(props.option.number)}>
        Option {props.option.number}
      </button>
      {props.option.text}
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.shape({
    number: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  }).isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default Option;
