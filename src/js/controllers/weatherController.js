import FetchAsync from '../utils/fetchAsync';
import handleError from '../utils/handlePromiseError';
import GeoCoding from '../models/toGeoCoding';
import Weather from '../models/weather';
import WeatherDetailsView from '../views/weatherDetailsView';

export default class WeatherController {
  // *need to return handleError as a promise here
  // *resolve value will be chain to create weatherObj
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

  // *doesn't need to return, this will take weatherObj to render dom
  static getWeatherInfo({ lat, lon }) {
    handleError(FetchAsync.getCurrentWeatherData)(lat, lon)
      .then((data) => {
        const weather = new Weather(data);
        console.log('weather', weather);
        return weather;
      })
      .then((weather) => WeatherDetailsView.renderDetails(weather));
  }
}
