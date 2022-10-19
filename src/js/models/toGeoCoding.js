export default class GeoCoding {
  constructor([
    {
      local_names: { feature_name: geoName },
      lat,
      lon,
      country,
      state,
    },
  ]) {
    this.name = geoName || '';
    this.latitude = lat || 0;
    this.longitude = lon || 0;
    this.country = country || '';
    this.state = state || '';
  }
}
