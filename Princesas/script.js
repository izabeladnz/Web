$(document).ready(function(e){
		$("#navbar a ").click(function(e){
		e.preventDefault();
		var href=$(this).attr('href');
		$(".conteudo").load(href+" .conteudo");
	});
});
	
	