import React from 'react';

const AnswerCardPanel = (props) => {
  <div
    className={`card-panel  ${props.className}`} 
    id={props.id}
    onClick={() => props.onClickHandler(props.onClickArgs)}
  >
    {props.content}
  </div>
};

export default AnswerCardPanel;
