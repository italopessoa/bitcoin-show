import React from 'react'
// import './CardPanel.css'
const AnswerCardPanel = (props) =>{
    return(
        <div className= {"card-panel "+props.className} id={props.id} onClick={() => props.onClickHandler(props.onClickArgs)}>
            {props.content}
        </div>
    );
}

export default AnswerCardPanel;