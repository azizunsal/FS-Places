import React from 'react';
import TimelineItem from './components/TimelineItem/index';
import style from './style.scss';

const TimelineItems = (props) => (

    <ul className="timeline">
      {props.items.map(item =>
        <TimelineItem
          key={item.id}
          item={item}
        />
      )}
    </ul>
  
);

export default TimelineItems;
