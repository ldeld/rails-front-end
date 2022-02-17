import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Change your life", "Welcome batch 786"],
      typeSpeed: 60,
      loop: false
    });
  }
}