$(document).ready(function() {
	$("#menu > div h3").each(function(){
		if($(this).next("ul").length > 0){
			$(this).append($(this).next("ul"));
		}
		else{
			$(this).addClass("hoverMenu");
		}
	});
});