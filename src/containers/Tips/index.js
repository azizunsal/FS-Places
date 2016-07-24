import React from 'react';
import Config from '../../config/Config';
import $ from 'jquery';
import Timeline from '../../components/Timeline/index';

class TipsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("[TipsContainer] props ", props);
    this.state = {tips: []};
  }

  loadTipsForVenue() {
    console.log("[TipsContainer] Load tips for ", this.props.venueId);
    $.getJSON(Config.FourSquare.apiUrl + 'v2/venues/' + this.props.venueId + '/tips/?sort=recent&v=20140601' +
    '&client_id=' + Config.FourSquare.clientId + '&client_secret=' + Config.FourSquare.clientSecret, {},
        function(data) {
          console.log("[TipsContainer] data ", data);
          this.setState({tips: data.response.tips.items});
        }.bind(this)
    );
  }

  componentDidMount() {
      this.loadTipsForVenue();
  }

  render() {
    return(
      <div className='container'>
        <Timeline items={this.state.tips} />
      </div>
    );
  }
}

export default TipsContainer;
