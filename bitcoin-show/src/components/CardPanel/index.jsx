import React from 'react';
import PropTypes from 'prop-types';

const CardPanel = props => (
  <div className={`card-panel  ${props.className}`}>
    {props.content}
  </div>
);

export default CardPanel;

CardPanel.propTypes = {
  content: PropTypes.element.isRequired,
  className: PropTypes.string,
};

CardPanel.defaultProps = {
  id: '',
  className: '',
};
