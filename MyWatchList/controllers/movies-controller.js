'use strict'

module.exports = function(Movie) {

    let get = function(req, res) {
        Movie.find({})
            .exec(function(err, movies) {
                if (err) {
                    //res.redirect('error');
                    throw err;
                };

                Movie.count({})
                    .exec(function(err, count) {
                        console.log(movies);
                        res.render('movies-all', {

                            movies: movies
                        });
                    });
            });
    };

    let post = function(req, res) {
        let reqMovie = req.body;

        let movie = new Movie({
            title: reqMovie.title
        });

        movie.save(function(err) {
            if (err) {
                throw err;
            }

            res.status(201).redirect('/movies');
        });

    };

    let getForm = function(req, res) {
        res.render('movies-add');
    };


    let moviesController = {
        get: get,
        post: post,
        getForm: getForm

    };

    return moviesController;

}
