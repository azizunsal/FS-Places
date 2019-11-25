import React from 'react';
import style from './style.scss';
import AutoCompleteContainer from '../../components/AutoComplete/index';

const HomeScene = (props) => {
  return(
    <div className="container center-area">
      <AutoCompleteContainer />
    </div>
  );
};

export default HomeScene;
