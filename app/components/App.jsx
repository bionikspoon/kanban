import React from 'react';
import AltContainer from 'alt-container';

import LaneActions from '../actions/LaneActions';
import LaneStore from '../stores/LaneStore';
import Lanes from './Lanes.jsx';

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

  addLane = () => {
    LaneActions.create({name: 'New lane'});
  };

}
