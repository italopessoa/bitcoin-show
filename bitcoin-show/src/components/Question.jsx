import React from 'react';
import PropTypes from 'prop-types';

const Question = props => (
  <div>
    <h1>{props.question.text}</h1>
    {props.hasASelectedOption &&
      <button
        onClick={
          () => props.checkAnswer(props.question, props.selectedOptionNumber)
        }
      >
        Verificar resposta
      </button>
    }
  </div >
);

Question.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  selectedOptionNumber: PropTypes.number,
  hasASelectedOption: PropTypes.bool.isRequired,
  checkAnswer: PropTypes.func.isRequired,
};

Question.defaultProps = {
  selectedOptionNumber: 0,
};


export default Question;
