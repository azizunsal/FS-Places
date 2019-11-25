import React from 'react';

const VenueCategoryBox = (props) => (
  <span style={{backgroundColor: '#57a544', display: 'inline-block'}}>
    <img src={props.icon.prefix + '32' + props.icon.suffix} />
  </span>
);

export default VenueCategoryBox;
