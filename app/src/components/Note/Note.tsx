import React from 'react';
import type { INote } from '../../../types/notes';

interface Props {
  note: INote;
}

export const Note: React.FC<Props> = ({ note }) => {
  const { title, content } = note;
  return (
    <div className="card">
      <div className="card-content">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span className="has-text-info">edit</span>
        </p>
        <p className="card-footer-item">
          <span className="has-text-danger">delete</span>
        </p>
      </footer>
    </div>
  );
};
