import React, { useState, useEffect } from 'react';
import { Note } from '../Note/Note';
import Masonry from 'react-masonry-css';
import { getNotes } from '../../services/noteServices';
import type { INote } from '../../../types/notes';
import { Nav } from '../Nav/Nav';
import { AddNote } from '../AddNote/AddNote';

interface Props {}

export const Notes: React.FC<Props> = () => {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className="container">
      <div className="section">
        <Nav />
      </div>

      <div className="container has-text-centered">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notes.length > 0 ? (
            notes!.map((note: INote, i) => (
              <Note key={i} note={note} fetchNotes={fetchNotes} />
            ))
          ) : (
            <p>You haven't added any notes yet!</p>
          )}
        </Masonry>
      </div>

      <div className="section">
        <AddNote fetchNotes={fetchNotes} />
      </div>

      <div className="footer">
        <div className="content has-text-centered">
          <p className="is-size-7">&copy; mylesan</p>
        </div>
      </div>
    </section>
  );
};
