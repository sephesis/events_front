import React from 'react';
import { Link } from 'react-router-dom';
import './FooterMenu.css';

const FooterMenu = ({ routes }) => {
  return (
      <ul className="turkey">
        {routes.map((route) => (
          <li key={route.route} className="turkey__item">
            <Link to={route.route} className="turkey__link">
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
  );
};

export default FooterMenu;