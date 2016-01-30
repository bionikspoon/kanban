import React from 'react';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import AltContainer from 'alt-container';
import Notes from './Notes.jsx';

export default class App extends React.Component {
  render() {
    const stores = {NoteStore};
    const inject = {
      notes: () => NoteStore.getState().notes
    };
    return (
      <div>
        <button className="add-note"
                onClick={this.addNote}>+
        </button>
        <AltContainer stores={stores}
                      inject={inject}>

          <Notes onEdit={this.editNote}
                 onDelete={this.deleteNote} />

        </AltContainer>
      </div>
    );
  }

  addNote = () => {
    NoteActions.create({task: 'New Task'});
  };

  editNote = (id, task) => {
    NoteActions.update({
      id,
      task
    });
  };

  deleteNote = (id) => {
    NoteActions.delete(id);
  };

}
