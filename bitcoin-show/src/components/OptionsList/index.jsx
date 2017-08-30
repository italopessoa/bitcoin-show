import React from 'react';
import PropTypes from 'prop-types';
import Option from '../../components/Option';

const styles = {
  selected: {
    background: 'green',
  },
};

const getStyle = (selectedOptionNumber, actualOptionNumber) => {
  if (selectedOptionNumber === actualOptionNumber) {
    return styles.selected;
  }
  return {};
};

const OptionsList = props => (
  <ul>
    {
      props.options.map(option => (
        <li key={option.number} style={getStyle(props.selectedOptionNumber, option.number)} >
          <Option onSelected={props.selectOption} number={option.number} text={option.text} />
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
