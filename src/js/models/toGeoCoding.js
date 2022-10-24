export default class GeoCoding {
  constructor([{ name, lat, lon, country, state }]) {
    this.name = name || '';
    this.latitude = lat || 0;
    this.longitude = lon || 0;
    this.country = country || '';
    this.state = state || '';
  }
}
