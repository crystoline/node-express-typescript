/// <reference path="../typings/index.d.ts"/>
import {Request, Response} from "express";
var express = require('express');
var router = express.Router();
var HomeController = require('../controllers/HomeController');

/* GET home page. */
router.get('/', HomeController.index);

module.exports = router;