import React from 'react';
import {Link} from 'react-router';

const Navbar = () => {
    return (
        <nav className="nav nav-tabs">
          <li>
            <Link to="/create">Create Game</Link>
          </li>
          <li>
            <Link to="/run">Run Game</Link>
          </li>
          <li>
            <Link to="/play">Play Game</Link>
          </li>
        </nav>
    );
};

export default Navbar;