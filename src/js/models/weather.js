export default class Weather {
  constructor({
    weather: [{ main: mainWeather, description }],
    main: { temp, humidity },
    wind: { speed },
  }) {
    this.mainWeather = mainWeather || '';
    this.description = description || '';
    this.temp = temp || 0;
    this.humidity = humidity || 0;
    this.windSpeed = speed || 0;
  }
}
