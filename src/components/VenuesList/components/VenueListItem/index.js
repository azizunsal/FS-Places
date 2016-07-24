import React from 'react';
import style from './style.scss';
import VenueCategoryBox from './components/VenueCategoryBox/index';
import VenueRating from './components/VenueRating/index';
import VenueTitle from './components/VenueTitle/index';
import VenueActionButtons from './components/VenueActionButtons/index';
import VenueCommunicationInfo from './components/VenueCommunicationInfo/index';

const VenueListItem = (props) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 " key={props.venue.id}>
      <div className="box">
        <VenueCategoryBox icon={props.venue.categories[0].icon} />
        <VenueRating rating={props.venue.rating} />
        <VenueTitle name={props.venue.name} hereNow={props.venue.hereNow} stats={props.venue.stats} />
        <VenueCommunicationInfo venue={props.venue} />
        <VenueActionButtons tipCount={props.venue.stats.tipCount} venueId={props.venue.id}/>
      </div>
    </div>
  );
};

export default VenueListItem;
