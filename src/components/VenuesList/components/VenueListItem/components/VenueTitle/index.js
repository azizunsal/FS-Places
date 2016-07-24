import React from 'react';
import style from './style.scss';

const VenueTitle = (props) => (
  <div className="title text-center">
      <h4>{props.name} <small>{"{"}{props.hereNow.summary}{"}"}</small> </h4>
      <span className="total-checkin-text"><i className="fa fa-check" aria-hidden="true"></i>
        {props.stats.checkinsCount} total checkin from {props.stats.usersCount} user
      </span>
  </div>
);

export default VenueTitle;
