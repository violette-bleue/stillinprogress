$(function() {

    $(document).on('click', '.adm__spoiler h4', function() {
        let parent = $(this).parent();
        let body = parent.children('.adm__spoiler-body');
        let i = $(this).index();
        if (parent.hasClass('is-open')) {
            parent.removeClass('is-open');
            body.slideUp();
        } else {
            parent.addClass('is-open');
            body.slideDown();
        }
    });

});