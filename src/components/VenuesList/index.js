import React from 'react';
import $ from 'jquery';
import styles from './style.scss';
import VenueListItem from './components/VenueListItem/index';

const VenuesList = (props) => {
  return (
    <div className="row">
      {props.venues.map((item) => (
        <VenueListItem key={item.venue.id} venue={item.venue} ll={props.ll}/>
      ))}
    </div>
  );
}

export default VenuesList;
