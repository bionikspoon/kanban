import React from 'react';
import Editable from './Editable.jsx';
import Note from './Note.jsx';

export default ({notes, onValueClick, onEdit, onDelete}) => {
  const notesList = notes.map(note => (
    <Note
      className="note"
      id={note.id}
      key={note.id}>

      <Editable
        editing={note.editing}
        value={note.task}
        onValueClick={onValueClick.bind(null, note.id)}
        onEdit={onEdit.bind(null, note.id)}
        onDelete={onDelete.bind(null, note.id)} />

    </Note>
  ));

  return <ul className="notes">{notesList}</ul>;
};
