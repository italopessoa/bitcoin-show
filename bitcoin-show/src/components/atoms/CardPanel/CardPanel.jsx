import React from 'react'
import './CardPanel.css'

const CardPanel = (props) => {
    return(
        <div className= {"card-panel "+props.className} id={props.id} 
            onClick={() => 
                props.onClickHandler ? props.onClickHandler(props.onClickArgs)
                : null}>
            {props.content}
        </div>
    );
}

export default CardPanel;