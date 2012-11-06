$(document).ready(function() {
	$("#menu > div h3").each(function(){
		if($(this).next("ul").length > 0){
			$(this).append($(this).next("ul"));
		}
		else{
			$(this).addClass("hoverMenu");
		}
	});
	
	if($('#menu h3').length != 0){
		$('#menu h3').each(function(){
			$(this).after('<div class="separator"></div>');
		});
	};
	
	if($('#menu01').length != 0){
		$('#menu01 li').each(function(){
			$(this).after('<div class="separator"></div>');
		});
	};
});