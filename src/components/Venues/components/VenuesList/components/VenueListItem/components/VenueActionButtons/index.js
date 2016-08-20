import React from 'react';
import style from './style.scss';
import Button from '../../../../../../../Button/index';
import {commentClicked} from '../../../../../../actions';
import {fetchTipsForVenue} from '../../../../../../actions';
import {connect} from 'react-redux';

// Buraya 'n' adet button gelebilir aslinda, ona gore render edilebilir belki.
// const VenueActionButtons = ({tipCount, venueId, clickHandler}) => (
const VenueActionButtons = (props) => (
  <div className="row">
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
      <Button
        className='btn btn-default btn-xs'
        iconClassName='fa fa-commenting'
        label= {'Total ' + props.tipCount + ' tip(s)'}
        clickHandler={(e) => props.dispatch(fetchTipsForVenue(props.venueId))}

      />
    </div>
</div>
);

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(VenueActionButtons);
