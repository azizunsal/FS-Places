import React from 'react';
import style from './style.scss';
import TipsContainer from '../../containers/Tips/index';

const TipsScene = (props) => {
  console.warn("[TipsScene] props ", props);
  return (
    <div>
      <h4>Venue Box will be here!</h4>
      <TipsContainer venueId={props.routeParams.venueId}/>
    </div>
  );
};

export default TipsScene;
