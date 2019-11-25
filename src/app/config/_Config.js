const Config = {
  FourSquare : {
    clientId: 'HH2HDSQXDWPGCDO5UOJLTUXPJR4E4O3HATDOADU4RFZ01DRR',
    clientSecret: 'TR3I2EQXN5WZDEXAVJQTVJ22CUOI3T5TG0JYA3AHZJDAXCIT',
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
    accessToken: 'pk.eyJ1IjoiYXppenVuc2FsIiwiYSI6ImNpcTgyMGZ2eDAwMzFocmtxbWlmcHVkejYifQ.VZoOABamLIV3Q9530qxaUw'
  }

};

export default Config;
