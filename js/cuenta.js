$(document).ready(function() {
    $("#checkaccount").click(function() {
        count = document.getElementById("contrato_n").value.length
        if (count > 0) {
            $("#loadata").fadeIn();
            $.getJSON("http://api.ayatelca.com/cuenta/index.php/contrato/" + $("#contrato_n").val() + "/cedula/85555")
                .done(function(json) {
                    var items = [];                    
                    if (json.length != 0) {
                        $("#clientname").html(json[0].nombres + " " + json[0].apellidos)
                        $("#consulog").hide();
                        $("#consuldata").fadeIn();
                        if (json[0].total != 0) {

                            if (json[0].enero != 0) {
                                items.push('<a href="#" class="list-group-item">Enero<span class="badge">' + json[0].enero + '</span></a>');
                            }
                            if (json[0].febrero != 0) {
                                items.push('<a href="#" class="list-group-item">Febrero<span class="badge">' + json[0].febrero + '</span></a>');
                            }
                            if (json[0].marzo != 0) {
                                items.push('<a href="#" class="list-group-item">Marzo<span class="badge">' + json[0].marzo + '</span></a>');
                            }
                            if (json[0].abril != 0) {
                                items.push('<a href="#" class="list-group-item">Abril<span class="badge">' + json[0].abril + '</span></a>');
                            }
                            if (json[0].mayo != 0) {
                                items.push('<a href="#" class="list-group-item">Mayo<span class="badge">' + json[0].mayo + '</span></a>');
                            }
                            if (json[0].junio != 0) {
                                items.push('<a href="#" class="list-group-item">Junio<span class="badge">' + json[0].junio + '</span></a>');
                            }
                            if (json[0].julio != 0) {
                                items.push('<a href="#" class="list-group-item">Julio<span class="badge">' + json[0].julio + '</span></a>');
                            }
                            if (json[0].agosto != 0) {
                                items.push('<a href="#" class="list-group-item">Agosto<span class="badge">' + json[0].agosto + '</span></a>');
                            }
                            if (json[0].octubre != 0) {
                                items.push('<a href="#" class="list-group-item">Octubre<span class="badge">' + json[0].octubre + '</span></a>');
                            }
                            if (json[0].septiembre != 0) {
                                items.push('<a href="#" class="list-group-item">Septimbre<span class="badge">' + json[0].septiembre + '</span></a>');
                            }
                            if (json[0].noviembre != 0) {
                                items.push('<a href="#" class="list-group-item">Noviembre<span class="badge">' + json[0].noviembre + '</span></a>');
                            }
                            if (json[0].diciembre != 0) {
                                items.push('<a href="#" class="list-group-item">Diciembre<span class="badge">' + json[0].diciembre + '</span></a>');
                            }
                            items.push('<a href="#"  style="background-color:#ce0c0c;color:#fff;"  class="list-group-item">Total<span class="badge" style="background-color:#fff;color:#666;">' + json[0].total + '</span></a>');
                        } else {
                            items.push('<a href="#"class="list-group-item">Usted no posee deudas.</a>');

                        }

                    } else {
                          items.push('<a href="#"class="list-group-item">Cliente no encontrado.</a>'); 
                          console.log("ke?"); 
                          $("#loadata").hide();
                          $("#notfound").show();                       
                    }
                    

                    $("#mesespay").html(items.join(""));
                })
                .fail(function(jqxhr, textStatus, error) {
                    var err = textStatus + ", " + error;
                    console.log("Request Failed: " + err);

                });

        } else {
            $("#alertadatos").show();
        }
    });
});
