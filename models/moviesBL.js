const Movies = require('./moviesModel');


exports.getAll = function() {

    return new Promise((resolve, reject) => {
        Movies.find({}, function(err, movies) {
            if (err) {
                reject(err)
            } else {
                resolve(movies)
            }
        })
    })
}


exports.getMovie = function(id) {

    return new Promise((resolve, reject) => {
        Movies.findById(id, function(err, movie) {
            if (err) {
                reject(err)
            } else {
                resolve(movie)
            }
        })
    })
}


exports.addMovie = function(obj) {
    try {
        const newMovies = new Movies({
            Name: obj.name,
            Genres: obj.genres,
            Image: obj.image,
            Premiered: obj.premiered
        })

        newMovies.save(function(err) {
            return new Promise((resolve, reject) => {
                if (err) {
                    reject(err)
                    console.log('err', err);
                } else {
                    resolve('Created!')
                    console.log('Created');
                }
            })
        })
    } catch (err) {
        console.log('addmovie error', err);
    }
}




exports.updateMovie = function(id, obj) {
    return new Promise((resolve, reject) => {
        Movies.findByIdAndUpdate(id, {
            Name: obj.name,
            Genres: obj.genres,
            Image: obj.image,
            Premiered: obj.premiered
        }, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Updated !')
            }
        })
    })
}

exports.deleteMovie = function(id) {

    return new Promise((resolve, reject) => {
        Movies.findByIdAndDelete(id, function(err) {
            if (err) {
                reject(err)
            } else {
                resolve('Deleted')
            }
        })
    })
}