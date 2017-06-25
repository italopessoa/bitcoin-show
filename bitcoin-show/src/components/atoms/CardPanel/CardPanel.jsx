import React from 'react'

const CardPanel = (props) =>{
    return(
        <div className= {"card-panel "+props.className}>
            <h6>{props.content}</h6>
        </div>
    );
}

export default CardPanel;