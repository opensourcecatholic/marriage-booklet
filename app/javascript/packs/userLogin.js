jQuery(document).on('mousedown','#reveal-password',ev => {
    let $evTarget = jQuery(ev.target);
    let $prevEl = $evTarget.prev('#password');
    $prevEl.attr('type','text');
    $evTarget.removeClass('fa-eye').addClass('fa-eye-slash');
});
jQuery(document).on('mouseup','#reveal-password',ev => {
    let $evTarget = jQuery(ev.target);
    let $prevEl = $evTarget.prev('#password');
    $prevEl.attr('type','password');
    $evTarget.removeClass('fa-eye-slash').addClass('fa-eye');
});