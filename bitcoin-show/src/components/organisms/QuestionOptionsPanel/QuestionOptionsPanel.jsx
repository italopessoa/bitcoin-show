import React from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
const QuestionOptionsPanel = (props) =>{
    return (
        <div>
         {
             props.questions.map((question,index) =>{
                 return(<CardPanel key={index} className="red white-text touchable" content={question} />);
             })
         }
        </div>
    )
}

export default QuestionOptionsPanel;