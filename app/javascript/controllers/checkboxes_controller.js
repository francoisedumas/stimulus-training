import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["checkbox", "button"]

  check() {
    if (this.checkboxTargets.some(x => x.checked)) {
      this.toggle()
    }
  }

  toggle() {
    this.buttonTarget.disabled = false
  }
}
