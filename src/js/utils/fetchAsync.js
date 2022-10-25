import NotFoundView from '../views/notFoundView';

export default class FetchAsync {
  static getGeographicPosition(cityName) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=3cc1ca6174214347ed3e915656a6c1dd`;

    return fetch(url, { mode: 'cors', method: 'GET' })
      .then((response) => {
        if (response.ok !== true) {
          const err = new Error(response.status);
          throw err;
        }
        return response.json();
      })
      .then((data) => {
        // *check for empty array
        if (Array.isArray(data) && data.length === 0) {
          const err = new Error('empty array');
          throw err;
        }
        // *return real data if empty array false
        // *return undefined if empty array true
        return data;
      })
      .catch((err) => {
        if (err.message === 'empty array') {
          // *call dom to handle 404 status
          NotFoundView.renderNotFound();
        }
      });
  }

  static getCurrentWeatherData(lat = 0, lon = 0, units = 'metric') {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=3cc1ca6174214347ed3e915656a6c1dd`;

    return fetch(url, { mode: 'cors', method: 'GET' }).then((response) => {
      if (response.ok !== true) {
        const err = new Error(response.status);
        throw err;
      }
      return response.json();
    });
  }
}
