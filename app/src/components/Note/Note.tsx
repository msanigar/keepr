import React, { useState } from 'react';
import type { INote } from '../../../types/notes';
import { editNote, deleteNote } from '../../services/noteServices';

interface Props {
  note: INote;
  fetchNotes: () => void;
}

export const Note: React.FC<Props> = ({ note, fetchNotes }) => {
  const { title, content, id } = note;
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState<INote['title']>('');
  const [tempContent, setTempContent] = useState<INote['content']>('');

  const handleEdit = () => {
    setIsEditing(false);
    editNote(tempTitle, tempContent, id).then(() => {
      fetchNotes();
    });
  };

  const handleDelete = () => {
    deleteNote(id).then(() => {
      fetchNotes();
    });
  };

  return (
    <div className="card">
      <div className="card-content">
        {!isEditing && (
          <>
            <p className="title">{title}</p>
            <p className="content">{content}</p>
          </>
        )}
        {isEditing && (
          <>
            <input
              type="text"
              placeholder={title || undefined}
              onChange={({ target }) => setTempTitle(target.value)}
            />
            <br />
            <textarea
              placeholder={content || undefined}
              onChange={({ target }) => setTempContent(target.value)}
            />
            <br />
          </>
        )}
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          {!isEditing && (
            <span className="has-text-info">
              <a onClick={() => setIsEditing(true)}>edit </a>
            </span>
          )}
          {isEditing && (
            <span className="has-text-info">
              <a onClick={() => handleEdit()}>save </a>
            </span>
          )}
        </p>
        <p className="card-footer-item">
          <span className="has-text-danger">
            {isEditing && <a onClick={() => setIsEditing(false)}>discard </a>}
            {!isEditing && <a onClick={() => handleDelete()}>delete </a>}
          </span>
        </p>
      </footer>
    </div>
  );
};
