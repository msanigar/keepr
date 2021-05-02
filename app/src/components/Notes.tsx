import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../components/Note';
import { getNotes } from '../services/noteServices';
import type { INote } from '../../types/notes';

interface Props {}

export const Notes: React.FC<Props> = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const fetchedNotes = await getNotes();
      setNotes(fetchedNotes);
    };
    fetchNotes();
  }, []);

  return (
    <div>
      <Link to="/add-note">Add note</Link>
      {notes ? (
        notes!.map((note: INote, i) => <Note key={i} note={note} />)
      ) : (
        <p>You haven't added any notes yet!</p>
      )}
    </div>
  );
};
