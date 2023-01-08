import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  initialize() {
    this.idx = parseInt($( 'input[name="carousel"]:checked' ).data( 'tabIndex' ));
    console.log('current tab index = ' + this.idx);
  }

  setIndex(ev) {
    this.idx = parseInt( ev.currentTarget.dataset.tabIndex );
    console.log('current tab index = ' + this.idx);
  }

  nextTab() {
    document.getElementById(`carousel-${++this.idx}`).checked = true;
    console.log('current tab index = ' + this.idx);
  }

  previousTab() {
    document.getElementById(`carousel-${--this.idx}`).checked = true;
    console.log('current tab index = ' + this.idx);
  }

  connect() {
  }
}
