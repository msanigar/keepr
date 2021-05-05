import React, { useState, useRef } from 'react';

import { addToNotes } from '../../services/noteServices';
import type { INote } from '../../../types/notes';

interface Props {
  fetchNotes: () => void;
}

export const AddNote: React.FC<Props> = ({ fetchNotes }) => {
  const [title, setTitle] = useState<INote['title']>('');
  const [content, setContent] = useState<INote['content']>('');
  // TODO: find a nice way to type the element refs
  const textRef = useRef<any>();
  const contentRef = useRef<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && content) {
      addToNotes(title, content).then(() => {
        fetchNotes();
        textRef.current.value = '';
        contentRef.current.value = '';
      });
    }
    console.log(`submitted: ${title} - ${content}`);
  };

  return (
    <div>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={textRef}
          type="text"
          placeholder="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <br />
        <textarea
          ref={contentRef}
          placeholder="enter your note here"
          onChange={({ target }) => setContent(target.value)}
        />
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
