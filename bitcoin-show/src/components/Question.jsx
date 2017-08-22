import React from 'react';
import PropTypes from 'prop-types';

const Question = props => (
  <div>
    <h1>{props.question.text}</h1>
    <button
      onClick={
        () => props.checkAnswer(props.question, props.selectedOption)
      }
    >
      Verificar resposta
    </button>
  </div>
);

Question.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
  selectedOption: PropTypes.number,
  checkAnswer: PropTypes.func.isRequired,
};

Question.defaultProps = {
  selectedOption: 0,
};


export default Question;
