var HomeController = (function () {
    function HomeController() {
        this.index = function (req, res, next) {
            res.render('index', { title: 'Express' });
        };
    }
    return HomeController;
}());
module.exports = HomeController;
