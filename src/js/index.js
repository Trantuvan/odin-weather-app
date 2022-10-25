/* eslint-disable consistent-return */
// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// IMG
import Logo from '../assets/img/favicon.png';

// JS
import changeFavicon from './utils/changeFavicon';
import FetchAsync from './utils/fetchAsync';
import handleError from './utils/handlePromiseError';
import GeoCoding from './models/toGeoCoding';
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

    handleError(FetchAsync.getGeographicPosition)(cityName).then((data) => {
      if (data !== undefined) {
        console.log('data index', data);
        const geo = new GeoCoding(data);
        console.log('geo', geo);
        return geo;
      }
    });
  });
})();
