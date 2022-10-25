import FetchAsync from '../utils/fetchAsync';
import handleError from '../utils/handlePromiseError';
import GeoCoding from '../models/toGeoCoding';

export default class WeatherController {
  static convertCityNameToGeoGraphic(cityName) {
    handleError(FetchAsync.getGeographicPosition)(cityName).then((data) => {
      // *check for empty array !== undefined --> geoGraphicCoding
      if (data !== undefined) {
        console.log('data WeatherController', data);
        const geoGraphicCoding = new GeoCoding(data);
        console.log('geo', geoGraphicCoding);
        return geoGraphicCoding;
      }
      // *fail to convertCityNameToGeoGraphic
      return undefined;
    });
  }
}
