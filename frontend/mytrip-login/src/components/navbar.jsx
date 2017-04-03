import React from 'react';
import {Link} from 'react-router';

const Navbar = ({isAuthenticated, logout}) => (
    <nav className="mytrip-navbar">
        <ul className="mytrip-navbar__items">
            <li><Link to="/">Home</Link></li>
            {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
            {!isAuthenticated && <li><Link to="/signup">Sign-up</Link></li>}
            {isAuthenticated && <li><Link to="/mytrip">MyTrip</Link></li>}
            {isAuthenticated && <li><Link to="/logout" onClick={logout}>Logout</Link></li>}
        </ul>
    </nav>
);

Navbar.proTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    logout: React.PropTypes.func.isRequired
}

export default Navbar;