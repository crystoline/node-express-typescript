/**
 * Created by Crysto on 7/14/2017.
 */

/*var HomeController =
{
    Index: function(req, res, next) {
        res.render('index', { title: 'Express' });
    }

}*/
class HomeController{

    public  index = function (req: any, res: any, next: any): void{
        res.render('index', { title: 'Express' });
    }
}



module.exports = HomeController;

