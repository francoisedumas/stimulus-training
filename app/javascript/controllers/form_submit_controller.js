import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["day"]

  connect() {
    console.log('hello')
  }
  handleChange() {
    console.log('hello handle change')
    this.element.submit();
  }
}
