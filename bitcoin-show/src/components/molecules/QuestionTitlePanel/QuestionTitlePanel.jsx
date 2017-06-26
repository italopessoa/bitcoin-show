import React from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
// import IconButton from '../../molecules/IconButton/IconButton.jsx'
import ScaleIconButton from '../../molecules/ScaleIconButton/ScaleIconButton.jsx'

import './QuestionTitlePanel.css' 
const QuestionTitlePanel = () =>{
  return(
    <CardPanel className="red" id="questionTitle" content={
      <div>
        <h5 className="white-text">Quem é o autor do manifesto comunista?</h5>
        <div style={{'float':'right'}}  className="hide-on-med-and-down">
          <ScaleIconButton 
            className="btn-floating btn-large waves-effect waves-light green" 
            iconClassName="material-icons"
            icon="done" />
        </div>
      </div>
    }
    />
  );
}

export default QuestionTitlePanel;