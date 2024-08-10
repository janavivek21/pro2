import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/public-queries">Public Queries</Link></li>
          <li><Link to="/volunteer-queries">Volunteer Queries</Link></li>
          <li><Link to="/organization-requests">Organization Requests</Link></li>
          <li><Link to="/orphan-requests">Orphan Requests</Link></li>
          <li><Link to="/points-tracking">Points Tracking</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
