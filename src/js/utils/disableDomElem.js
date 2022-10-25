export default function disableDomElem() {
  const errorMessage = document.querySelector('.form-message');
  const notFound = document.querySelector('.not-found');

  if (errorMessage.classList.contains('disabled') === false) {
    errorMessage.classList.add('disabled');
  }

  if (notFound.classList.contains('disabled') === false) {
    notFound.classList.add('disabled');
  }
}
