import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    connect() {
        this.element.addEventListener("mousedown", ev => {
            let $evTarget = jQuery(ev.currentTarget);
            let $prevEl = $evTarget.prev('#password');
            $prevEl.attr('type','text');
            $evTarget.removeClass('fa-eye').addClass('fa-eye-slash');
        });
        this.element.addEventListener("mouseup", ev => {
            let $evTarget = jQuery(ev.currentTarget);
            let $prevEl = $evTarget.prev('#password');
            $prevEl.attr('type','password');
            $evTarget.removeClass('fa-eye-slash').addClass('fa-eye');
        });
    }

}
