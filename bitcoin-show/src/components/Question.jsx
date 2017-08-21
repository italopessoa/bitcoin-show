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

// Question.propTypes = {
//   text: PropTypes.string.isRequired,
// };

export default Question;
