export default class FormMessageView {
  static #errorMessage = document.querySelector('.form-message');

  static setErrorMessage(message = '') {
    this.#errorMessage.textContent = message;
    this.#errorMessage.classList.remove('disabled');
  }
}
