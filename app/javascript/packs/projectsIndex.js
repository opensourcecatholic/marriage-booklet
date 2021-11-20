import "stylesheets/projects";

function toggleTabs(activeIndex) {
  $(".tab-buttons > li > button").each(function (k, v) {
    let current = $(v);
    if (current.hasClass("active")) {
      current.removeClass("active");
    }
  });
  $(".tab-buttons > li > button[data-tab-index=" + activeIndex + "]").each(
    function (k, v) {
      $(v).addClass("active");
    }
  );
}

$(".tab-item").on("click", function (e) {
  let sender = e.currentTarget;
  if (
    sender &&
    !sender.classList.contains("disabled") &&
    !sender.classList.contains("active") &&
    sender.attributes["data-tab-index"] !== undefined
  ) {
    let index = sender.attributes["data-tab-index"].value;
    if (index !== undefined) {
      toggleTabs(index);
      $(".tab-contents > li").each(function (k, v) {
        let currIndex = v.attributes["data-tab-content-index"].value;
        if (currIndex == index) {
          $(v).removeClass("hidden");
        } else {
          $(v).addClass("hidden");
        }
      });
    }
    return false;
  }
});
