import React from 'react';
import type { INote } from '../../../types/notes';

interface Props {
  note: INote;
}

export const Note: React.FC<Props> = ({ note }) => {
  const { title, content } = note;
  return (
    <>
      <p>title: {title}</p>
      <p>content: {content}</p>
    </>
  );
};
