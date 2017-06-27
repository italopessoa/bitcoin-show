import React from 'react';
import UList from '../UList/UList';
import IconButton from '../../molecules/IconButton/IconButton';

const Toolbar = () => (<UList
  className="right"
  items={[
    <IconButton className="material-icons" icon="view_carousel" />,
    <IconButton className="fa fa fa-graduation-cap" />,
    <IconButton className="fa fa-users" />,
    <IconButton className="fa fa-arrow-right" />,
  ]}
/>
);

export default Toolbar;
