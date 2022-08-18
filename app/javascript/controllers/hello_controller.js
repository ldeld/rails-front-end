import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello controller connected to my HTML")
  }

  handleClick() {
    console.log("clicked");
  }
}
