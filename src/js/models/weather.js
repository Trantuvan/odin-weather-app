export default class Weather {
  constructor({
    weather: [{ main: mainWeather, description, icon }],
    main: { temp, feels_like: feelsLike, temp_max: tempMax, temp_min: tempMin },
  }) {
    this.mainWeather = mainWeather || '';
    this.description = description || '';
    this.icon = icon || '';
    this.temp = temp || 0;
    this.feelsLike = feelsLike || 0;
    this.tempMax = tempMax || 0;
    this.tempMin = tempMin || 0;
  }
}
