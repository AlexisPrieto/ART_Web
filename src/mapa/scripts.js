function configPcia(id, descripcionId, descripcionUrl, metodo) {
	metodo = metodo || "POST";
	$(id).click(function(){
		$.ajax({
			type: metodo,
			//data: dataString,
			url: descripcionUrl,
			success: function(a) { $(descripcionId).html(a); }
		});
	});
};
$(document).ready(function(){
	$(".ar-pcia").show();
	$(".ar-pcia").click(function(){
		$(".ar-pcia").removeClass("ar-activo");
		$(this).addClass("ar-activo");
	});
});
