var load = function(path, target = "#content", callback){
	$.get(path).done(function (data) {
		$(target).html(data);
		if (callback !== null && callback !== undefined) {
			callback();
		}else{
			$("#header").css("display", "block");
		}
	})
};

var landing = function(){
	load("landing.html","#content", function(){
		$("#header").css("display", "none");
	});
}

var load_business_form = function(){
	var checked = document.getElementById("empresa").checked;

	if(checked){
		load("business.html", "#business")
	}else{
		$("#business").html("");
	}
}