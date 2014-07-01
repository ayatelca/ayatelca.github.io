var tvguideapi = "http://tvguide.gopagoda.com/"

$(document).ready(function() {
    $.getJSON(tvguideapi + "index.php/canales", function(data) {
        var items = [];
        $.each(data, function(key, val) {
            if (val.dtv != null) {
                clk = 'onclick="descChannel(this);"';
            } else {
                clk = "";
            }
            html = '<li class="list-group-item"> \
                <img src="' + tvguideapi + val.img + '" alt="..." width="64" height="32" class="thumbchanel"> \
                <div class="chanelspace"> \
                  <h4><a data-dtv="' + val.dtv + '" data-canal="' + val.numero + '" data-iurl="' + tvguideapi + val.img + '" data-short="' + val.short + '" data-nombre="' + val.nombre + '"' + clk + '>' + val.numero + '<br>' + val.short + '</a></h4> \
                </div> \
              </li>';
            items.push(html);
        });

        $("#canales").hide().html(items.join("")).fadeIn('slow');
    });

});

function descChannel(anchor) {
    var irul = $(anchor).data("iurl");
    var nom = $(anchor).data("nombre");
    var dtv = $(anchor).data("dtv");
    $.getJSON(tvguideapi + "index.php/programacion/" + dtv, function(data) {
        var items = [];
        $.each(data, function(key, val) {

            input = "<form><input type='text'/></form>"
            html = '<tr>  \
                <td class="horas">' + moment.unix(val.start).local().format("hh:mmA") + " " + moment.unix(val.end).local().format("hh:mmA") + '</td> \
                <td class="titul">' + val.programa + '</td> \
                <td class="recordar" ><a   data-content="' + input + '" data-canal="' + val.numero + '" data-pid="' + val.uid + '"  class="btn btn-default notify"><i class="glyphicon glyphicon-phone"></i>Recordar  </a></td> \
            </tr>';
            items.push(html);
        });

        $("#programacion").html(items.join(""))
    });


    $("#ct").html(nom);
    $("#canalModal .thumbchanel").attr("src", irul);
    $("#wday").attr("data-dtv", dtv);
    $("#wday").val(0)
    $("#canalModal").modal("show");
}


function write_prog(dtv) {
    $.getJSON(tvguideapi + "index.php/programacion/" + dtv, function(data) {
        var items = [];
        $.each(data, function(key, val) {


            html = '<tr>  \
                <td class="horas">' + moment.unix(val.start).local().format("hh:mmA") + " " + moment.unix(val.end).local().format("hh:mmA") + '</td> \
                <td class="titul">' + val.programa + '</td> \
                <td class="recordar" ><a class="btn btn-default"><i class="glyphicon glyphicon-phone"></i>Recordar  </a></td> \
            </tr>';
            items.push(html);
        });
        $("#programacion").hide().html(items.join("")).fadeIn('slow');
    });
}




$(document).ready(function() {
    $("#wday").change(function() {
        console.log();
        if ($("#wday").val() == 1) {
            write_prog($("#wday").attr("data-dtv") + '/tomorrow')
        } else {
            write_prog($("#wday").attr("data-dtv"))
        }
    });


    $(document).on('click', '.notify', function(e) {
        e.preventDefault();
        $(".notify").popover({
            html: true
        });
        $(this).popover('toggle')
        $('.notify').not(this).popover('destroy');
        $.get(tvguideapi, {
            canal: "John",
            uid: "2pm"
        });

        $(".titul,.horas").mouseover(function() {
            $('.notify').popover('destroy');
        });
    });

});
