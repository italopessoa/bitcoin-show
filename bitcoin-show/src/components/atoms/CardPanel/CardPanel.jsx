import React from 'react'
import './CardPanel.css'
const CardPanel = (props) =>{
    return(
        <div className= {"card-panel "+props.className} id={props.id} >
            {props.content}
        </div>
    );
}

export default CardPanel;