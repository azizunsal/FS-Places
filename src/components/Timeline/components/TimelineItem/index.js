import React from 'react';
import style from './style.scss';

const TimelineItem = ({item}) => (
  <li>
    <div className={'timeline-badge ' + item.badgeClass}>
      <img src={item.user.photo.prefix + '48x48' + item.user.photo.suffix} />
    </div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <h5 className="timeline-title">{item.user.firstName + item.user.lastName}<small>{new Date(item.createdAt).toTimeString()}</small></h5>
      </div>

      <div className="timeline-body">
        {item.text}
      </div>

      <div className="timeline-footer">
        <button className="btn btn-xs">
          <span><i className="fa fa-thumbs-o-up likeBtn" aria-hidden="true"></i> {item.agreeCount} agree </span>
        </button>
        <button className="btn btn-xs dislikeBtn">
          <i className="fa fa-thumbs-o-down" aria-hidden="true"></i> {item.disagreeCount} disagree
        </button>
      </div>

    </div>
  </li>
);

export default TimelineItem;
