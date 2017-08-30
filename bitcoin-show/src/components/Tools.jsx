import React from 'react';
import PropTypes from 'prop-types';

const Tools = props => (
  <div>
    {/* <button onClick={() => props.stopProgress()} >Parar</button> */}
    <button
      disabled={props.skipAttemptsLeft <= 0}
      onClick={() => props.skipQuestion()}
    >Pular: {props.skipAttemptsLeft}
    </button>
    <button disabled={props.cardsWereUsed} onClick={() => props.displayCards()} >Cartas</button>
    <button onClick={() => props.stopPlaying()}>Parar</button>
  </div>
);

Tools.propTypes = {
  // stopProgress: PropTypes.func.isRequired,
  skipQuestion: PropTypes.func.isRequired,
  displayCards: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
  skipAttemptsLeft: PropTypes.number.isRequired,
  cardsWereUsed: PropTypes.bool.isRequired,
};

export default Tools;
