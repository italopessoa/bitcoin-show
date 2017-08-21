import React from 'react';
import PropTypes from 'prop-types';

const Question = props => {
  return (
    <h1>{props.text}</h1>
  )
}

Question.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Question;
