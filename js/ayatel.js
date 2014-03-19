$(function() {

	$('.admin-menu li > a').click(function(e)
	{
		e.preventDefault();
		$('.admin-menu li').removeClass('active');
		$(this).closest('li').addClass('active');
	});

	$('.sub-menu li > a').click(function(e)
	{
		e.preventDefault();
		$('.sub-menu li').removeClass('active');
		$(this).closest('li').addClass('active');
		var page=$(this).data("page");
		$(".contenido-noti").load(page, function() { 
			$(".contenido-noti").show();
		});
	});
});

function descChannel(anchor){
	var canal=$(anchor).data("canal");
	var nombre=$(anchor).data("nombre");
	var target = "modalCanal.php?canal="+canal+"&nombre="+nombre ;

    $("#canalModal .modal-content").load(target, function() { 
    	$("#canalModal").modal("show"); 
    });
}

