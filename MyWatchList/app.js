'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let db = mongoose.connect('mongodb://localhost/movies');

let Movie = require('./models/movieModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'jade');

require('./routers')(app, Movie);

let port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`App running at port ${port}`);
});
