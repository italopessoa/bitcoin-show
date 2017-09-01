import React from 'react';
import PropTypes from 'prop-types';
import CardPanel from '../CardPanel';

const styles = {
  rightAlign: {
    float: 'right',
  },
};

const scaleInOut = (scaleIn) => {
  const classesValue = 'btn-floating btn-large waves-effect waves-light green scale-transition ';
  return classesValue.concat(scaleIn ? 'scale-in' : 'scale-out');
};

const Question = props => (
  <div>
    <CardPanel
      className="red white-text"
      content={
        <div>
          <div>
            <h5>{props.question.text}</h5>
          </div>
          <div style={styles.rightAlign}>
            <a
              onClick={() => props.checkAnswer(props.question, props.selectedOptionNumber)}
              className={scaleInOut(props.hasASelectedOption)}
            >
              <i className="material-icons">done</i>
            </a>
          </div>
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
