export default class FetchAsync {
  static getGeographicPosition(cityName = '') {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=3cc1ca6174214347ed3e915656a6c1dd`;

    return fetch(url, { mode: 'cors', method: 'GET' }).then((response) => {
      if (response.ok !== true) {
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
      }

      return response.json();
    });
  }

  static getCurrentWeatherData({ lat = 0, lon = 0, units = 'metric' }) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=3cc1ca6174214347ed3e915656a6c1dd`;

    return fetch(url, { mode: 'cors', method: 'GET' }).then((response) => {
      if (response.ok !== true) {
        const error = new Error(response.statusText);
        error.response = response;
        return Promise.reject(error);
      }

      return response.json();
    });
  }
}
