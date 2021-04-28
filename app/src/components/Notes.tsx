import React from 'react';
import { Note } from './Note';
import { Link } from 'react-router-dom';

export const Notes = () => {
  return (
    <>
      <Link to="/add-note">Add Note</Link>
      <Note />
      <Note />
      <Note />
      <Note />
    </>
  );
};
