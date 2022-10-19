export default class GeoCoding {
  constructor([
    {
      local_names: { feature_name: geoName = '' },
      lat = 0,
      lon = 0,
      country = '',
      state = '',
    },
  ]) {
    this.name = geoName;
    this.latitude = lat;
    this.longitude = lon;
    this.country = country;
    this.state = state;
  }
}
