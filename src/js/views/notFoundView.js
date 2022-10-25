export default class NotFoundView {
  static #notFound = document.querySelector('.not-found');

  static renderNotFound() {
    this.#notFound.classList.remove('disabled');
  }
}
