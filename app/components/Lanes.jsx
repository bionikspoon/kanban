import React from 'react';
import Lane from './Lane.jsx';

export default ({lanes}) => {
  const lanesList = lanes.map(lane => (
    <Lane
      className="lane"
      key={lane.id}
      lane={lane} />
  ));

  return <div className="lanes">{lanesList}</div>;
};
