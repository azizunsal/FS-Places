import React from 'react';
import TimelineItem from './components/TimelineItem/index';
import VenueListItem from '../VenuesList/components/VenueListItem/index';
// '/Users/azizunsal/projects/reactjs/FS-Places/src/components'

import style from './style.scss';

const Timeline = (props) => (
  <div className="container">
    <ul className="timeline">
      {props.items.map(item =>
        <TimelineItem
          key={item.id}
          item={item}
        />
      )}
    </ul>
  </div>
);

export default Timeline;
