import cloud from '../../assets/img/cloud.png';
import clear from '../../assets/img/clear.png';
import rain from '../../assets/img/rain.png';
import mist from '../../assets/img/mist.png';
import snow from '../../assets/img/snow.png';

export default class WeatherDetailsView {
  static #weatherContainer = document.querySelector('.weather-container');

  static #weatherDetails = document.querySelector('.weather-details');

  static renderDetails(weather) {
    const img = this.#weatherContainer.querySelector('img');
    const temp = this.#weatherContainer.querySelector('.temperature');
    const weatherDesc = this.#weatherContainer.querySelector('.description');
    const humidity = this.#weatherDetails.querySelector('.humidity span');
    const wind = this.#weatherDetails.querySelector('.wind span');

    if (weather.mainWeather === 'Clouds') {
      img.src = cloud;
    }

    if (weather.mainWeather === 'Clear') {
      img.src = clear;
    }

    if (weather.mainWeather === 'Rain') {
      img.src = rain;
    }

    if (weather.mainWeather === 'Mist') {
      img.src = mist;
    }

    if (weather.mainWeather === 'Snow') {
      img.src = snow;
    }

    temp.innerHTML = `${weather.temp} <span>°C</span>`;
    weatherDesc.textContent = weather.description;
    humidity.textContent = `${weather.humidity}%`;
    wind.textContent = `${weather.windSpeed}m/s`;

    this.#weatherContainer.classList.remove('disabled');
    this.#weatherDetails.classList.remove('disabled');
  }
}
