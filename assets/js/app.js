var load = function (path, target, callback) {
    if (target === void 0) { target = "#content"; }
    $.get(path).done(function (data) {
        $(target).html(data);
        if (callback !== null && callback !== undefined) {
            callback();
        }
        else {
            $("#header").css("display", "block");
            $("#content").css("paddingTop", "0rem");
        }
    });
};
var landing = function () {
    load("landing.html", "#content", function () {
        $("#header").css("display", "none");
        $("#content").css("paddingTop", "4.5rem");
    });
};
var load_business_form = function () {
    var checked = document.getElementById("empresa").checked;
    if (checked) {
        load("business.html", "#business");
    }
    else {
        $("#business").html("");
    }
};
///<reference path='main_functions.ts' /> 
