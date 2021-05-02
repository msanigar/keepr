import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { addToNotes } from '../services/noteServices';
import type { INote } from '../../types/notes';

interface Props {}

export const AddNote: React.FC<Props> = () => {
  const [title, setTitle] = useState<INote['title']>('');
  const [content, setContent] = useState<INote['content']>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && content) {
      addToNotes(title, content);
    }
    console.log(`submitted: ${title} - ${content}`);
  };

  return (
    <div>
      <Link to="/">all notes</Link>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        <textarea
          placeholder="enter your note here"
          onChange={({ target }) => setContent(target.value)}
        />
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
