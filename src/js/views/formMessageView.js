export default class FormMessageView {
  #errorMessage;

  constructor() {
    this.#errorMessage = document.querySelector('.form-message');
  }

  setErrorMessage(message = '') {
    this.#errorMessage.textContent = message;
    this.#errorMessage.classList.remove('disabled');
  }

  removeErrorMessage(time) {
    setTimeout(() => {
      this.#errorMessage.textContent = '';
      this.#errorMessage.classList.add('disabled');
    }, time);
  }
}
