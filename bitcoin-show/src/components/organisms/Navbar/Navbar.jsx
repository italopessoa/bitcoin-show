// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import Toolbar from '../../molecules/Toolbar/Toolbar';

const Navbar = props => (
  <nav className="blue darken-3">
    <div className="nav-wrapper">
      <div className="container">
        <Toolbar
          cardsDataBadge={props.cardsDataBadge}
          cardsOnClick={props.showCardsOnClick}

          crowdDataBadge={props.crowdDataBadge}
          crowdOnClick={props.showHelpOnClick}
          
          skipDataBadge={props.skipDataBadge}
          passOnClick={props.skipQuestionOnClick}
        />
      </div>
    </div>
  </nav>);

export default Navbar;
