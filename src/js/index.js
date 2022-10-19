// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// IMG
import Logo from '../assets/img/favicon.png';

// JS
import changeFavicon from './utils/changeFavicon';
import handleError from './utils/handlePromiseError';
import FetchAsync from './utils/fetchAsync';

(() => {
  changeFavicon(Logo);
  handleError(FetchAsync.getGeographicPosition)('fffs').then((data) =>
    // *return an array of locations meet the criteria
    // *return [] if cannot meet the criteria
    console.log('data', data)
  );
})();
