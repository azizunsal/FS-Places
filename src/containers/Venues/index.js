import React from 'react';
import Config from '../../config/Config';
import $ from 'jquery';
import VenuesList from '../../components/VenuesList/index';

class VenuesContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("VenuesContainer - props = ", this.props);
    this.state = {
      venues: []
    };

    this.getRecommendedPlaces = this.getRecommendedPlaces.bind(this);
  }

  sort(venues) {
    const sortedVenues = venues.sort(function(a, b){
      if (a.venue.rating>b.venue.rating) return 1;
      if (a.venue.rating<b.venue.rating) return -1;
      return 0;
    }).reverse();

    return sortedVenues;
  }

  componentDidMount() {
      this.getRecommendedPlaces();
  }

  getRecommendedPlaces() {
    $.getJSON(Config.FourSquare.apiUrl + 'v2/venues/explore?ll=' + this.props.ll +
      '&client_id=' + Config.FourSquare.clientId + '&client_secret=' + Config.FourSquare.clientSecret +
      '&v=20140601&limit=' + Config.FourSquare.limit + '&section=' + Config.FourSquare.section.topPicks, {},
        function(data) {
          console.log("data : ", data);
          const venues = data['response']['groups'][0]['items'];
          const radius = data['response']['suggestedRadius'];
          const totalResults = data['response']['totalResults'];
          console.log("[Venues  = %O, Total Results %O, Radius %O]", venues, totalResults, radius);
          const sortedVenues = this.sort(venues);
          this.setState({radius: radius, venues: sortedVenues, totalResults: totalResults});
        }.bind(this)
    );
  }

  render() {
    return(
      <VenuesList className={this.props.className} venues={this.state.venues} ll={this.props.ll}/>
    );
  }

}

export default VenuesContainer;
