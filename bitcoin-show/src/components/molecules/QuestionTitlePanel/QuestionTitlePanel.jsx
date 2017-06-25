import React from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'

const QuestionTitlePanel = () =>{
  return(
    <CardPanel className="red" id="questionTitle" content={
      <h5 className="white-text">Quem é o autor do manifesto comunista?</h5>
    } />
    );
}

export default QuestionTitlePanel;