import React from 'react';
import AltContainer from 'alt-container';

import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';

import LaneActions from '../actions/LaneActions';

export default class Lane extends React.Component {
  constructor(props) {
    super(props);

    const id = props.lane.id;

    this.addNote = this.addNote.bind(this, id);
    this.deleteNote = this.deleteNote.bind(this, id);

  }

  render() {
    const {lane, ...props} = this.props;
    const inject = {
      notes: () => NoteStore.getNotesById(lane.notes)
    };

    return (
      <div {...props}>
        <div className="lane-header">
          <div className="lane-add-note">
            <button onClick={this.addNote}>+</button>
          </div>
          <div className="lane-name">{lane.name}</div>
        </div>
        <AltContainer
          stores={{NoteStore}}
          inject={inject}>

          <Notes onEdit={this.editNote}
                 onDelete={this.deleteNote} />

        </AltContainer>

      </div>
    );
  }

  addNote(laneId) {
    const note = NoteActions.create({task: 'New task'});
    LaneActions.attachToLane({
      laneId: laneId,
      noteId: note.id
    });
  }

  editNote(id, task) {
    NoteActions.update({
      id,
      task
    });
  }

  deleteNote(laneId, noteId) {
    LaneActions.detachFromLane({
      laneId,
      noteId
    });
    NoteActions.delete(noteId);
  }
}
