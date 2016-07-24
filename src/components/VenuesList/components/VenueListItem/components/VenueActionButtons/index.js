import React from 'react';
import style from './style.scss';
import Button from '../../../../../Button/index';
import {browserHistory} from 'react-router'

// Buraya 'n' adet button gelebilir aslinda, ona gore render edilebilir belki.
const VenueActionButtons = ({tipCount, venueId}) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
      <Button
        className='btn btn-default btn-xs'
        iconClassName='fa fa-commenting'
        label= {'Total ' + tipCount + ' tip(s)'}
        clickHandler={() => {console.warn('ll is ', venueId); browserHistory.push(`/venues/${venueId}/tips`);} }
      />
    </div>
</div>
);

export default VenueActionButtons;
