import React from 'react';
import PropTypes from 'prop-types';

const Tools = props => (
  <div>
    {/* <button onClick={() => props.stopProgress()} >Parar</button> */}
    <button onClick={() => props.skipQuestion()} >Pular: {props.skipAttemptsLeft}</button>
    <button onClick={() => props.displayCards()} >Cartas</button>
  </div>
);

Tools.propTypes = {
  // stopProgress: PropTypes.func.isRequired,
  skipQuestion: PropTypes.func.isRequired,
  displayCards: PropTypes.func.isRequired,
  skipAttemptsLeft: PropTypes.number.isRequired,
};

export default Tools;
