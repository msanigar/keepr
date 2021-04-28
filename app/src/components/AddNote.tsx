import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface INote {
  title: string | null;
  content: string | null;
}

export const AddNote: React.FC = () => {
  const [title, setTitle] = useState('' as INote['title']);
  const [content, setContent] = useState('' as INote['content']);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
