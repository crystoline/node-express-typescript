import {Request, Response} from "express";

class HomeController{
      public static index = function (req: Request, res: Response, next: Function): void{
        res.render('index', { title: 'Express' });
    }
}



module.exports = HomeController;

