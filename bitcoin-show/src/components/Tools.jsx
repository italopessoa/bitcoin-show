import React from 'react';
import PropTypes from 'prop-types';

const Tools = props => (
  <div>
    <button onClick={() => props.stopProgress()} >Parar</button>
    <button onClick={() => props.skipQuestion()} >Pular</button>
  </div>
);

Tools.propTypes = {
  stopProgress: PropTypes.func.isRequired,
  skipQuestion: PropTypes.func.isRequired,
};

export default Tools;
