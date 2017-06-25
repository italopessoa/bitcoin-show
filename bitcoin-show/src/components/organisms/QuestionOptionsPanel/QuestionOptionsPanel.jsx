import React from 'react'
import CardPanel from '../../atoms/CardPanel/CardPanel.jsx'
const QuestionOptionsPanel = (props) =>{
    return (
        <div>
         {
             props.options.map((option,index) =>{
                 return(<CardPanel key={index} className="red white-text touchable selected-answer waves-effect waves-light" content={option} />);
             })
         }
        </div>
    )
}

export default QuestionOptionsPanel;