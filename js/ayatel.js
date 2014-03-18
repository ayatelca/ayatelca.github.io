$(function() {
    
    $('.admin-menu li > a').click(function(e)
    {
        e.preventDefault();
        $('.admin-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
    });

    $(".canales").perfectScrollbar();
});
