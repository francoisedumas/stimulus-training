import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["checkbox", "button"]

  check() {
    this.checkboxTargets.forEach(
      checkbox => {}
    )
  }
}
