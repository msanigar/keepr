import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

export const Account: React.FC<Props> = () => {
  return (
    <>
      <div>This is the account area! :)</div>
      <Link to="/">Go back</Link>
    </>
  );
};
