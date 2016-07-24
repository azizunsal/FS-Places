import React from 'react';

const SearchButton = ({clickHandler, className}) => {
  return(
    <div className={className}>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
        <a className="btn btn-xs btn-default" onClick={clickHandler}>
          <i className="fa fa-refresh"></i> New Search
        </a>
      </div>
    </div>
  );
};
export default SearchButton;
