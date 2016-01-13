'use strict'

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let movieModel = new Schema({
    title: {
        type: String
    }
});

module.exports = mongoose.model('Movie', movieModel);
