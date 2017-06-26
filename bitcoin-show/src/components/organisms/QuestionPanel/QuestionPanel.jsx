import React from 'react'
import QuestionTitlePanel from '../../molecules/QuestionTitlePanel/QuestionTitlePanel.jsx'
import QuestionOptionsPanel from '../../molecules/QuestionOptionsPanel/QuestionOptionsPanel.jsx'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
import './QuestionPanel.css'

const QuestionPanel = () =>{
  return(
    <CardPanel className="card-panel blue darken-3 zero-padding-left"
      content={
        <div>
          <div className="row">
            <div className="col m12 zero-padding-left">
              <QuestionTitlePanel />
            </div>
          </div>
          <div className="row ">
            <div className="col m9 s11">
              <QuestionOptionsPanel options={['Karl Marx','Tio patinhas','Chapolin colorado','Chespirito']} />
            </div>
          </div>
        </div>
      }
    />
  );
}

export default QuestionPanel;