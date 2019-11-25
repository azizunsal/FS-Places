import React from 'react';
import {browserHistory} from 'react-router';
import Button from '../../components/Button/index';

const NotFoundScene = (props) => {
  console.log("[NotFoundScene] props ", props);
  return(
    <div>
      <div className="text-center">
        <h2>No matching route found!</h2>
      </div>
      <div className="text-center">
        <Button
          className="btn btn-danger"
          iconClassName="fa fa-arrow-left"
          clickHandler={
            () => browserHistory.goBack()
          }
          label="Go Back"
        />
      </div>
    </div>
  );
};

export default NotFoundScene;
