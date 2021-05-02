import React, { useState, useEffect } from 'react';
import { Note } from '../Note/Note';
import { getNotes } from '../../services/noteServices';
import type { INote } from '../../../types/notes';
import { Nav } from '../Nav/Nav';

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
    <section className="container">
      <div className="notification is-primary">This is a notification!!</div>

      <div className="section">
        <Nav />
      </div>

      <div className="section">
        <div className="container has-text-centered">
          {notes ? (
            notes!.map((note: INote, i) => <Note key={i} note={note} />)
          ) : (
            <p>You haven't added any notes yet!</p>
          )}
        </div>
      </div>

      <div className="footer">
        <div className="content has-text-centered">
          <p className="is-size-7">&copy; mylesan</p>
        </div>
      </div>
    </section>
  );
};
