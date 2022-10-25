/* eslint-disable consistent-return */
// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// IMG
import Logo from '../assets/img/favicon.png';

// JS
import changeFavicon from './utils/changeFavicon';
import WeatherController from './controllers/weatherController';
import FormMessageView from './views/formMessageView';

(() => {
  changeFavicon(Logo);
  const searchBox = document.querySelector('#search');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const cityName = searchBox.value;

    // *check for empty string and whitespaces
    if (cityName.trim().length === 0) {
      FormMessageView.setErrorMessage('* Required properly city name');

      // *remove error message
      FormMessageView.removeErrorMessage(3000);

      return undefined;
    }

    const geoCoding = WeatherController.convertCityNameToGeoGraphic(cityName);
  });
})();
