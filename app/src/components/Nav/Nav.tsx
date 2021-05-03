import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth/UserContext';
import specsSvg from '../../img/undraw_Specs_djh3.svg';
import classnames from 'classnames';

interface Props {}

export const Nav: React.FC<Props> = () => {
  const { logout } = useContext(UserContext);
  const [isActive, setIsActive] = useState(false);

  const menuClasses = classnames('navbar-burger', { 'is-active': isActive });
  const burgerClasses = classnames('navbar-menu', { 'is-active': isActive });

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to="/">
            <img src={specsSvg} />
          </Link>
        </div>
        <a
          role="button"
          className={menuClasses}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" className={burgerClasses}>
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/add-note">Add note</Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a onClick={logout}>Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
