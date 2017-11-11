var actor;
var load = function (path, person, callback) {
    if (person !== undefined)
        actor = person;
    $.get(path).done(function (data) {
        $('#content').html(data);
        if (callback !== null && callback !== undefined) {
            callback();
        }
        else {
            $("#header").css("display", "block");
            $("#content").css("paddingTop", "5.5rem");
        }
    });
};
var bubbles = function (callback) {
    console.log(actor + "/dashboard.html");
    $.get(actor + "/dashboard.html").done(function (data) {
        $('#content').html(data);
        if (callback !== null && callback !== undefined) {
            callback();
        }
        else {
            $("#header").css("display", "block");
            $("#content").css("paddingTop", "5.5rem");
        }
    });
};
var landing = function () {
    load("landing.html", "#content", function () {
        $("#header").css("display", "none");
        $("#content").css("paddingTop", "0rem");
    });
};
var load_business_form = function () {
    var checked = document.getElementById("empresa").checked;
    if (checked) {
        load("search/business.html", "#business");
    }
    else {
        $("#business").html("");
    }
};
///<reference path='main_functions.ts' /> 
