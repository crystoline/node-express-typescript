"use strict";
var HomeController = (function () {
    function HomeController() {
    }
    HomeController.index = function (req, res, next) {
        res.render('index', { title: 'Express' });
    };
    return HomeController;
}());
module.exports = HomeController;
