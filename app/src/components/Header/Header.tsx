import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../auth/UserContext';

interface Props {}

export const Header: React.FC<Props> = () => {
  const { logout } = useContext(UserContext);

  return (
    <div>
      <Link to="/add-note">+</Link>
      <a onClick={logout}>Sign out</a>
    </div>
  );
};
