import React from 'react';
import type { INote } from '../../types/notes';

type IProps = {
  note: INote;
};

export const Note: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <p>title: {props.note.title}</p>
      <p>content: {props.note.content}</p>
    </>
  );
};
