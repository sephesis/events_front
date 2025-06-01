import React from 'react';
import { Link } from 'react-router-dom';
import './TopMenu.css';

const TopMenu = ({ routes }) => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        {routes.map((route) => (
          <li key={route.route} className="menu__item">
            <Link to={route.route} className="menu__link">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopMenu;