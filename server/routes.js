//var express = require('express');
//var router = express.Router();
var home = require('../controllers/home');
var image = require('../controllers/image');

/*module.exports.initialize = function(app) {
	router.get('/', home.index);
	router.get('/images/:image_id', image.index);
	router.post('/images', image.create);
	router.post('/images/:image_id/like', image.like);
	router.post('/images/:image_id/comment', image.comment);
	router.delete('/images/:image_id', image.remove);
	//app.use(router);
};*/

module.exports.initialize = function(app) {
	app.get('/', home.index);
	app.get('/images/:image_id', image.index);
	app.post('/images', image.create);
	app.post('/images/:image_id/like', image.like);
	app.post('/images/:image_id/comment', image.comment);
	app.delete('/images/:image_id', image.remove);
	//app.use(router);
};