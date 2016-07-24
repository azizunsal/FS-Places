import React from 'react';
import style from './style.scss';

const VenueCommunicationInfo = (props) => (
  <div className="info">
      <div className="text-center trunk">
        <address>
          <a href={props.venue.url}><i className="fa fa-map-marker" aria-hidden="true"></i></a>
          <small>{props.venue.location.address}</small><br/>
          <span><i className="fa fa-phone" aria-hidden="true"></i> <small> {props.venue.contact.formattedPhone} </small></span>
        </address>
      </div>
  </div>
);

export default VenueCommunicationInfo;
