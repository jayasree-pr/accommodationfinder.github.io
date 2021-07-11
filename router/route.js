const express = require('express');
const route = express.Router();
const service = require('../services/render');
const controller = require('../database/controller');

route.get('/home',service.displayhome);
route.get('/hotels',service.displayhotels);
route.get('/homestay',service.displayhomestay);
route.get('/book',service.displayform);
//route.get('/form/booked',service.displayformdata);

route.post('/form/booked',controller.create);

module.exports = route;