var load = function(path, target = "#content", callback){
	$.get(path).done(function (data) {
		$(target).html(data);
		if (callback !== null && callback !== undefined) {
			callback();
		}else{
			$("#header").css("display", "block");
			$("#content").css("paddingTop", "5.5rem")
		}
	})
};

var landing = function(){
	load("landing.html","#content", function(){
		$("#header").css("display", "none");
		$("#content").css("paddingTop", "0rem")
	});
}

var load_business_form = function(){
	var checked = document.getElementById("empresa").checked;

	if(checked){
		load("search/business.html", "#business")
	}else{
		$("#business").html("");
	}
}