var load = function(path, target = "#content", callback){
	$.get(path).done(function (data) {
		$(target).html(data);
		if (callback !== null && callback !== undefined) {
			callback();
		}
	})
};