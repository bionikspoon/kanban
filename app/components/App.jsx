import React from 'react';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

const Notes = require('./Notes.jsx');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = NoteStore.getState();
  }

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  };

  render() {
    const notes = this.state.notes;
    return (
      <div>
        <button className="add-note"
                onClick={this.addNote}>+
        </button>
        <Notes notes={notes}
               onEdit={this.editNote}
               onDelete={this.deleteNote}
        />
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
