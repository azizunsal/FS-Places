
const Config = {
  FourSquare : {
    clientId: '<your client id>',
    clientSecret: '<your client secret>',
    apiUrl: 'https://api.foursquare.com/',
    limit: 30,
    section: {
      food    : 'food',
      drinks  : 'drinks',
      coffee  : 'coffee',
      shops   : 'shops',
      arts    : 'arts',
      outdoors: 'outdoors',
      sights  : 'sights',
      trending: 'trending',
      specials: 'specials',
      nextVenues: 'nextVenues',
      topPicks: 'topPicks'
    }
  },
  Mapbox: {
    accessToken: '<your access token>'
  }

};

export default Config;
