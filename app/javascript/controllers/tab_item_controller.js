import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    toggleTabs(activeIndex) {
        $('.tab-buttons > li > button').each(function (k,v) {
          let current = $(v);
          if (current.hasClass('active')) {
            current.removeClass('active');
          }
        }); 
        $('.tab-buttons > li > button[data-tab-index=' + activeIndex + ']').each(function (k,v) {
          $(v).addClass('active');
        }); 
    }

    connect() {
      this.element.addEventListener("click", ev => {
        let sender = ev.currentTarget;
        if (sender && !sender.classList.contains('disabled') && !sender.classList.contains('active')) {
         let index = sender.attributes['data-tab-index'].value; 
         if (index !== undefined) {
           this.toggleTabs(index);
           $('.tab-contents > li').each(function (k,v) {
             let currIndex = v.attributes['data-tab-content-index'].value;
             if (currIndex == index) {
                $(v).removeClass('hidden');
             } else {
                $(v).addClass('hidden');
             }
           });
         }
         return false;
        }
    });
  }
}
