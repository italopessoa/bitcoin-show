import React from 'react'

const CardPanel = (props) =>{
    return(
        <div className= {"card-panel "+props.className}>
            {props.content}
        </div>
    );
}

export default CardPanel;