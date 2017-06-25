// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'
import Toolbar from '../../molecules/Toolbar/Toolbar.jsx'

const Navbar = () => {
  return (
    <nav className="blue darken-3">
      <div className="nav-wrapper">
        <div className="container">
          <Toolbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar