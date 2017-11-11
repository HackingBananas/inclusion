var load = function (path, target) {
    if (target === void 0) { target = "#content"; }
    $.get(path).done(function (data) {
        $(target).html(data);
    });
};
///<reference path='main_functions.ts' /> 
