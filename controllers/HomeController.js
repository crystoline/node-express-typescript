"use strict";
/**
 * Created by Crysto on 7/14/2017.
 */
/*var HomeController =
{
    Index: function(req, res, next) {
        res.render('index', { title: 'Express' });
    }

}*/
var HomeController = (function () {
    function HomeController() {
        this.index = function (req, res, next) {
            res.render('index', { title: 'Express' });
        };
    }
    return HomeController;
}());
module.exports = HomeController;
