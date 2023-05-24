import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <>
    <div className="navBar nav">
      <h1 className="header">BookStore CMS</h1>
      <div className="panel-bg">
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Nav;
