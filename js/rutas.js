

Path.map("#/post/:id/:name").to(function() {
    posts("posts/" + this.params['id'])
    $(document).ready(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
        $('#home').show().hide();
        $('#channel').hide();
        $('#post').fadeIn();
    });
});


Path.map("#/nosotros").to(function() {
    nosotros()
    $(document).ready(function() {
    	$("html, body").animate({ scrollTop: 0 }, "slow");
        $('#home').show().hide();
        $('#channel').hide();
        $('#post').hide().fadeIn();

    });
});

Path.map("#/contacto").to(function() {
   
    $(document).ready(function() {
        $('#conmodal').modal('show')
    });
});

Path.map("#/canales").to(function() {
    programacion();
    $(document).ready(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        $('#home').show().hide();
        $('#post').show().hide();
        $('#channel').hide().fadeIn();
    });
});


Path.listen();
