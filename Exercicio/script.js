$(document).ready(function(e){
	$("#dialog-confirm").hide();
	$(".menuPrincipal a").click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$(".conteudo").load(href + ".conteudo");
	});
});

function dialogo(){
	$("#dialog-confirm").dialog({
		resizable: false,
		width: 400,
		height: 200,
		modal: true,
		buttons: {
			"Confirma": function() {
				$( this ).dialog( "close" );
			},
			"Cancelar": function() {
				$( this ).dialog( "close");
			}
		}
	});
};

