import React from 'react';
import VenuesContainer from '../../containers/Venues/index';
import AutoCompleteInput from '../../components/AutoCompleteInput/index';
import Button from '../../components/Button/index';

import { browserHistory } from 'react-router';

import styles from './style.scss';

class VenuesListScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='container'>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <Button
              className='btn btn-xs btn-default'
              iconClassName="fa fa-refresh"
              label="New Search"
              clickHandler={ () => browserHistory.push('/')}
            />
          </div>
        </div>
        <VenuesContainer
          className='row'
          ll={this.props.routeParams.ll}
        />
      </div>
    );
  }
}

export default VenuesListScene;
