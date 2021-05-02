import React, { useState, useEffect } from 'react';
import { Note } from '../Note/Note';
import { getNotes } from '../../services/noteServices';
import type { INote } from '../../../types/notes';

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
      {notes ? (
        notes!.map((note: INote, i) => <Note key={i} note={note} />)
      ) : (
        <p>You haven't added any notes yet!</p>
      )}
    </div>
  );
};
