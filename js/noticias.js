var news_api = "http://api.ayatelca.com/wp-json/"


$(document).ready(function() {
    function lispost(endpoint) {
        $.getJSON(news_api + endpoint, function(data) {
            var items = [];
            $.each(data, function(key, val) {
                img = val.featured_image.attachment_meta.sizes.medium.url;
                $('#aimg' + key).attr("src", img);

                $('#titular' + key).html('<a href="#/post/' + val.ID + '/' + val.slug + '">' + val.title + '</a>');
            });

        });

    }




    lispost("posts?filter[category_name]=ayacucho&filter[posts_per_page]=3");


    $('.sub-menu li > a').click(function(e) {
        e.preventDefault();
        $('.sub-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
        var page = $(this).data("page");
        lispost(page);
    });
});
$(function() {
    function noticias(endpoint) {
        $.getJSON(news_api + endpoint, function(data) {
            var items = [];
            $('#noticias').html("")
            $.each(data, function(key, val) {
                //console.log(val);
                try {
                    img = val.featured_image.attachment_meta.sizes.medium.url;
                } catch (err) {
                    img = "";
                }
                var html = [
                    '<div class="col-md-4">',
                    '<article class="panel panel-center principales">',
                    '<div class="panel-body">',
                    ' <div class="thumbnail">',
                    '<img style="width:240px; height:170px;" src="' + img + '"></div>',
                    '<p id="titular0"><a href="#/post/' + val.ID + '/' + val.slug + '">',
                    val.title,
                    '</a></p>',
                    '</div>',
                    ' </article>',
                    '</div>'
                ].join('\n');

                $('#noticias').append(html)

            });

        })
            .always(function() {
                $("#spinnews").hide();
            });

        // Perform other
    }



    $('.admin-menu li > a').click(function(e) {

        if ($(this).data("item") == "noticias") {
            $("#inews").hide();
            $("#noticias").fadeIn("slow");
            $("#spinnews").fadeIn("show");
            $('#post').hide();
            $('#channel').hide();
            $('#home').fadeIn();
            noticias('posts?ayacucho&filter[posts_per_page]=5');
            //location.href = "#newstitle";
            $("html, body").animate({
                scrollTop: $('#newstitle').offset().top
            }, 1000);

        } else if ($(this).data("item") == "index") {
            $("#inews").show();
            $("#noticias").hide();
            $('#home').fadeIn();
            $('#channel').hide();
            $('#post').hide();
            history.pushState(null, null, "/");

        } else if ($(this).data("item") == "contacto") {
            $('#conmodal').modal('toggle')
            history.pushState(null, null, "#/contacto");

        }
        $('.admin-menu li').removeClass('active');
        $(this).closest('li').addClass('active');
    });


});

function posts(endpoint) {
    $.getJSON(news_api + endpoint, function(data) {
        $("#postitle").html("<h1>" + data.title + "</h1>");
        $("#postext").html(data.content);
    })
        .always(function() {});

    // Perform other
}

function nosotros() {
    $.getJSON("json/nosotros.json", function(data) {

        $("#postitle").html("<h1>" + data.title + "</h1>");
        $("#postext").html(data.content);

        // $("#postitle").html("<h1>" + data.title + "</h1>");
        //$("#postext").html(data.content);
    })
        .always(function() {});

    // Perform other
}

function programacion() {
    $.getJSON(tvguideapi + "index.php/canales", function(data) {
        //var items = [];
        $.each(data, function(key, val) {            
            html = '<div class="items"><p class="text-center"><img src="'+tvguideapi+val.img+'" alt="'+val.nombre+'" height="50" width="80"></p><p class="text-center">'+val.nombre+'</p><p class="text-center"><strong>'+val.numero+'</strong></p></div>';
            //items.push(html);
           $(".wrapp").hide().append(html).fadeIn('slow');  
        });        
        //$(".wrapp").hide().append(items.join("")).fadeIn('slow');        
    })
        .always(function() {});

    
}
