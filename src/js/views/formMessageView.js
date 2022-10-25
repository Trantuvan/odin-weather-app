export default class FormMessageView {
  static #errorMessage = document.querySelector('.form-message');

  static setErrorMessage(message = '') {
    this.#errorMessage.textContent = message;
    this.#errorMessage.classList.remove('disabled');
  }

  static removeErrorMessage(time) {
    setTimeout(() => {
      this.#errorMessage.textContent = '';
      this.#errorMessage.classList.add('disabled');
    }, time);
  }
}
