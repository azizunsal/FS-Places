import React from 'react';
import style from './style.scss';
import TipsContainer from '../../components/Timeline/index';
import VenueDetails from '../../components/VenueDetails/index';

const TipsScene = (props) => (
  <div className="container">
    <VenueDetails />
    <TipsContainer
      venueId={props.routeParams.venueId}
    />
  </div>
);

export default TipsScene;
