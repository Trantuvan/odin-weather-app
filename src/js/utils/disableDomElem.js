export default function disableDomElem() {
  const errorMessage = document.querySelector('.form-message');
  const notFound = document.querySelector('.not-found');
  const weatherContainer = document.querySelector('.weather-container');
  const weatherDetails = document.querySelector('.weather-details');

  if (errorMessage.classList.contains('disabled') === false) {
    errorMessage.classList.add('disabled');
  }

  if (notFound.classList.contains('disabled') === false) {
    notFound.classList.add('disabled');
  }

  if (weatherContainer.classList.contains('disabled') === false) {
    weatherContainer.classList.add('disabled');
  }

  if (weatherDetails.classList.contains('disabled') === false) {
    weatherDetails.classList.add('disabled');
  }
}
