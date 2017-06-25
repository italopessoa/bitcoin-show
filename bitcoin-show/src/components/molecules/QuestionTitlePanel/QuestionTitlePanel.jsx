import React from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
import './QuestionTitlePanel.css' 
const QuestionTitlePanel = () =>{
  return(
    <CardPanel className="red" id="questionTitle" content={
      <div>
        <h5 className="white-text">Quem é o autor do manifesto comunista?</h5>
        <div style={{'float':'right'}}  className="hide-on-med-and-down">
          <a className="btn-floating btn-large waves-effect waves-light green scale-transition hide-on-med-and-down scale-in" id="btnResponder">
          <i className="material-icons">done</i>
          </a>
        </div>
      </div>}
    />
    );
}

export default QuestionTitlePanel;