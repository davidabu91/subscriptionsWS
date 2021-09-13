const moviesBL = require('../models/moviesBL');
const utils = require('./moviesAPImodel');

console.log('utils...');

async function getMovies() {
    console.log('utils function...');

    let movies = await utils.getMoviesFromWS();
    let counter = 0
    movies.map(obj => {
        // moviesBL.addMovie(obj)
        counter += 1
    })
    console.log(counter, 'Movies Added');
    console.log(movies[3]);
}
getMovies()