import React from 'react'
import QuestionTitlePanel from '../../molecules/QuestionTitlePanel/QuestionTitlePanel.jsx'
import QuestionOptionsPanel from '../QuestionOptionsPanel/QuestionOptionsPanel.jsx'


const QuestionPanel = () =>{
  return(
    <div className="card-panel blue darken-3 zero-padding-left">
      <QuestionTitlePanel />
        <div className="row ">
          <div className="col m9 s11">
            <QuestionOptionsPanel questions={['Karl Marx','Tio Patinhas','Chapolin Colorado','Chespirito']} />
          </div>
        </div>
    </div>
  );
}

export default QuestionPanel;