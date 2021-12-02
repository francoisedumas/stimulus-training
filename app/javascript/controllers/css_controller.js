import { Controller } from 'stimulus';

export default class extends Controller {
  static values = { sizing: String, name: String, step: Number }

  handleUpdate () {
    console.log(this.sizingValue)
    console.log(this.nameValue)
    console.log(this.stepValue)
    const suffix = this.sizingValue || '';
    document.documentElement.style.setProperty(`--${this.nameValue}`, this.stepValue + suffix);
  }
}
