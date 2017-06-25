import React from 'react'

const UList = (props) => {
  return(
    <ul className={props.className}>
      {
        props.items.map((item,index) =>{
          return(<li key={index}>{item}</li>);
        })
      }
    </ul>
  );
}

export default UList;