import React from 'react';
import style from './style.scss';
import VenueCategoryBox from './components/VenueCategoryBox/index';
import VenueRating from './components/VenueRating/index';
import VenueTitle from './components/VenueTitle/index';
import VenueActionButtons from './components/VenueActionButtons/index';
import VenueCommunicationInfo from './components/VenueCommunicationInfo/index';

const VenueListItem = ({venue}) => (
  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 " key={venue.id}>
    <div className="box">
      <VenueCategoryBox icon={venue.categories[0].icon} />
      <VenueRating rating={venue.rating} />
      <VenueTitle name={venue.name} hereNow={venue.hereNow} stats={venue.stats} />
      <VenueCommunicationInfo venue={venue} />
      <VenueActionButtons
        tipCount={venue.stats.tipCount}
        venueId={venue.id}
      />
    </div>
  </div>
);
export default VenueListItem;
