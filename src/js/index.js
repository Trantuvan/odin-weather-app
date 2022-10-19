// CSS
import '../assets/css/normalize.css';
import '../assets/css/reset.css';
import '../assets/css/style.css';

// IMG
import Logo from '../assets/img/favicon.png';

// JS
import changeFavicon from './utils/changeFavicon';

(() => {
  changeFavicon(Logo);
})();
