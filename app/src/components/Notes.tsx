import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../components/Note';
import { getNotes } from '../services/noteServices';
import type { INote } from '../../types/notes';

export const Notes = () => {
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
      {notes!.map((note: INote) => (
        <Note note={note} />
      ))}
    </div>
  );
};
