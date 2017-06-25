import React from 'react'

const CardPanel = (props) =>{
    return(
        <div className= {"card-panel "+props.className} id={props.id} onClick={() => props.onSelectHandler(props.itemIndex)}>
            <div>
            {props.content}
            </div>
        </div>
    );
}

export default CardPanel;