import React from 'react';
import Config from '../../config/Config';
import TimelineItems from './components/TimelineItems/index';
import {connect} from 'react-redux';

const TipsContainer = (props) => <TimelineItems items={props.tips} />;

const mapStateToProps = (state, ownProps) => {
  return {
    venueId: ownProps.venueId,
    tips: state.venues.tips
  };
}

export default connect(mapStateToProps)(TipsContainer);
