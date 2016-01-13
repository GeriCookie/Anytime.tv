'use strict';
let express = require('express'),
    router = new express.Router();




module.exports = function(app, Movie) {
    app.use('/movies', router);
    let controller = require('../controllers/movies-controller')(Movie);



    router.get('/', controller.get)
        .post('/', controller.post)
        .get('/add', controller.getForm);
}
