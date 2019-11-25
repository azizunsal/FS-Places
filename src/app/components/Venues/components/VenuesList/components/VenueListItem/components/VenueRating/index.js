import React from 'react';
import style from './style.scss';

const VenueRating = (props) => (
  <div className="box-icon">
      <span className='fa fa-3x'> {props.rating}</span>
  </div>
);

export default VenueRating;
