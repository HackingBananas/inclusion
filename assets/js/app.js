var load = function (path, target, callback) {
    if (target === void 0) { target = "#content"; }
    $.get(path).done(function (data) {
        $(target).html(data);
        if (callback !== null && callback !== undefined) {
            callback();
        }
    });
};
///<reference path='main_functions.ts' /> 
