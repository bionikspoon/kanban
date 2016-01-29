import React from 'react';
//noinspection ES6UnusedImports
import Note from './Note.jsx';

export default ({notes, onEdit, onDelete}) => {
  const notesList = notes.map(note => (
    <li className="note"
        key={note.id}>
      <Note task={note.task}
            onEdit={onEdit.bind(null, note.id)}
            onDelete={onDelete.bind(null, note.id)}
      />
    </li>
  ));
  return <ul className="notes">{notesList}</ul>;
};
