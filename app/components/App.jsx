import uuid from 'node-uuid';
import React from 'react';

//noinspection JSUnusedLocalSymbols,JSUnresolvedVariable
export default class App extends React.Component {
  constructor(props) {
    super(props);
    //noinspection JSUnresolvedFunction
    this.state = {
      notes: [
        {
          id:   uuid.v4(),
          task: 'Learn Webpack'
        },
        {
          id:   uuid.v4(),
          task: 'Learn React'
        },
        {
          id:   uuid.v4(),
          task: 'Take out the trash'
        }
      ]
    };
  }

  render() {
    const notes = this.state.notes.map(note =><li key={note.id}>{note.task}</li>);

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <ul>
          {notes}
        </ul>
      </div>
    );
  }

  addNote = () => {
    //noinspection JSUnresolvedFunction
    this.setState({
      notes: this.state.notes.concat([
        {
          id:   uuid.v4(),
          task: 'New task'
        }
      ])
    });
  };

}
