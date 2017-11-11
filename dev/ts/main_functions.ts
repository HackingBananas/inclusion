var load = function(path, target = "#content"){
	$.get(path).done(function (data) {
		$(target).html(data);
	})
};