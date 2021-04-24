import React from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
  return (
    <div>
      <Link to="/add-number">Add Note</Link>
      <h2>Notes</h2>

      <p>here be notes</p>
    </div>
  );
};
export default Notes;
