const activeTabClasses = [
  'border-l','border-t','border-r','rounded-t','text-blue-700','font-semibold','active'
];
const inactiveTabClasses = [
 'text-gray-500','hover:text-blue-800','font-semibold'
];

function toggleTabs(activeIndex) {
  $('.tab-buttons > li > button').each(function (k,v) {
    let current = $(v);
    if (current.hasClass('active')) {
      current.removeClass(activeTabClasses);
      current.addClass(inactiveTabClasses);
      current.parent().removeClass('-mb-px');
    } else {
      current.parent().addClass('-mb-px');
    }
  }); 
  $('.tab-buttons > li > button[data-tab-index=' + activeIndex + ']').each(function (k,v) {
    $(v).removeClass(inactiveTabClasses);
    $(v).addClass(activeTabClasses);
  }); 
}

$('.tab-item').on('click', function (e) {
 let sender = e.currentTarget;
 if (sender && !sender.classList.contains('disabled') && !sender.classList.contains('active')) {
  let index = sender.attributes['data-tab-index'].value; 
  if (index !== undefined) {
    toggleTabs(index);
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