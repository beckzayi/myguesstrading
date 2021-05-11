import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <div className="header bg-blue">
    <div className="container">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/" className="nav-link font-weight-light" activeClassName="current-page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link font-weight-light" activeClassName="current-page">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/subscribe"  className="nav-link font-weight-light" activeClassName="current-page">Subscribe</Link>
        </li>
        <li className="nav-item">
          <Link to="/terms-of-service" className="nav-link font-weight-light" activeClassName="current-page">Terms</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
