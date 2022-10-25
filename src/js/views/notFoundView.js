export default class NotFoundView {
  static #notFound = document.querySelector('.not-found');

  static renderNotFound() {
    this.#notFound.classList.remove('disabled');
  }

  static removeNotFound(time) {
    setTimeout(() => {
      this.#notFound.classList.add('disabled');
    }, time);
  }
}
