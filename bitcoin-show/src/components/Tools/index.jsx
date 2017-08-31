import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tools = props => (
  <ul className={'right'}>
    <li>
      <a
        className={'numberBadge'}
        data-badge={props.skipAttemptsLeft}
        onClick={() => (props.skipAttemptsLeft > 0) && props.skipQuestion()}
      >
        <i className={'material-icons'}>cached</i>
      </a>
    </li>
    <li>
      <a onClick={() => !props.cardsWereUsed && props.displayCards()}>
        <i className={'material-icons'}>view_carousel</i>
      </a>
    </li>
    <li>
      <a onClick={() => props.stopPlaying()}>
        <i className={'material-icons'}>cancel</i>
      </a>
    </li>
  </ul>
);

Tools.propTypes = {
  skipQuestion: PropTypes.func.isRequired,
  displayCards: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
  skipAttemptsLeft: PropTypes.number.isRequired,
  cardsWereUsed: PropTypes.bool.isRequired,
};

export default Tools;
