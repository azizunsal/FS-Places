import React from 'react';
import styles from './style.scss';
import VenueListItem from './components/VenueListItem/index';

const VenuesList = (props) => {
  console.log("[VenuesList] - props ", props);
  return (
    <div className="row">
      {props.venues.map((item) => (
        <VenueListItem key={item.venue.id} venue={item.venue} ll={props.ll}/>
      ))}
    </div>
  );
}

export default VenuesList;
