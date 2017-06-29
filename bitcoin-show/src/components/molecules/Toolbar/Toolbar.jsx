import React from 'react';
import UList from '../UList/UList';
import IconButton from '../../molecules/IconButton/IconButton';

const Toolbar = props => (<UList
  className="right"
  items={[
    <IconButton onClick={props.cardsOnClick} className="material-icons" icon="view_carousel" />,
    <IconButton className="fa fa fa-graduation-cap" />,
    <IconButton onClick={props.crowdOnClick} className="fa fa-users" />,
    <IconButton onClick={props.passOnClick} className="fa fa-arrow-right" />,
  ]}
/>
);

export default Toolbar;
