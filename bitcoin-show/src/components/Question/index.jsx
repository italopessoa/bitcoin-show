import React from 'react';
import PropTypes from 'prop-types';
import CardPanel from '../CardPanel';

const Question = props => (
  <div>
    <CardPanel
      className="red white-text"
      content={
        <div>
          <h5>{props.question.text}</h5>
          <button
            hidden={!props.hasASelectedOption}
            onClick={() => props.checkAnswer(props.question, props.selectedOptionNumber)}
          >
            Verificar resposta
      </button>
        </div>
      }
    />
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
