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

(() => {
  changeFavicon(Logo);
  const searchBox = document.querySelector('#search');
  const searchBtn = document.querySelector('.search-btn');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const cityName = searchBox.value;

    // *check for empty string and whitespaces
    if (cityName.trim().length === 0) {
      const errorMessage = document.querySelector('.form-message');
      errorMessage.textContent = '* Required properly city name';
      errorMessage.classList.remove('disabled');

      // *remove error message
      setTimeout(() => {
        errorMessage.classList.add('disabled');
      }, 3000);

      return undefined;
    }

    handleError(FetchAsync.getGeographicPosition)(cityName).then((data) =>
      console.log('data', data)
    );
  });
})();
