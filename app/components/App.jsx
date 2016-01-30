import React from 'react';
import AltContainer from 'alt-container';

import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import Lanes from './Lanes.jsx';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

@DragDropContext(HTML5Backend)
export default class App extends React.Component {
  render() {
    const stores = {LaneStore};
    const inject = {
      lanes: () => LaneStore.getState().lanes || []
    };
    return (
      <div>
        <button className="add-lane"
                onClick={this.addLane}>+
        </button>
        <AltContainer stores={stores}
                      inject={inject}>

          <Lanes />

        </AltContainer>
      </div>
    );
  }

  addLane() {
    LaneActions.create({name: 'New lane'});
  }

}
