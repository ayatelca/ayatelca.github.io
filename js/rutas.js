

Path.map("#/post/:id/:name").to(function() {
    posts("posts/" + this.params['id'])
    $(document).ready(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
        $('#home').show().hide();
        $('#post').fadeIn();
    });
});


Path.map("#/nosotros").to(function() {
    nosotros()
    $(document).ready(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
        $('#home').show().hide();
        $('#post').hide().fadeIn();
    });
});



Path.listen();
