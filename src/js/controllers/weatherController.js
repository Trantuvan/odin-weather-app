import FetchAsync from '../utils/fetchAsync';
import handleError from '../utils/handlePromiseError';
import GeoCoding from '../models/toGeoCoding';
import Weather from '../models/weather';

export default class WeatherController {
  static convertCityNameToGeoGraphic(cityName) {
    return handleError(FetchAsync.getGeographicPosition)(cityName).then(
      (data) => {
        // *check for empty array !== undefined --> geoGraphicCoding
        if (data !== undefined) {
          const geoGraphicCoding = new GeoCoding(data);
          return geoGraphicCoding;
        }
        // *fail to convertCityNameToGeoGraphic
        return undefined;
      }
    );
  }

  static getWeatherInfo({ lat, lon }) {
    return handleError(FetchAsync.getCurrentWeatherData)(lat, lon).then(
      (data) => {
        console.log('data weather', data);
        const weather = new Weather(data);
        console.log('weatherObj', weather);
        return weather;
      }
    );
  }
}
