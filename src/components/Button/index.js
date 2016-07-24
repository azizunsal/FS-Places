import React from 'react';

const Button = ({clickHandler, className, label, iconClassName}) => {
  return(
    <a className={className} onClick={clickHandler}>
      <i className={iconClassName}></i> {label}
    </a>
  );
};
export default Button;
