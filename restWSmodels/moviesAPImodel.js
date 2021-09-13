const axios = require('axios');
const moviesBL = require('../models/moviesBL');


// exports.getMoviesFromWS = async function() {



//     let resp = await axios('https://api.tvmaze.com/shows');
//     let moviesArr = resp.data;

//     moviesArr.map(movie => {
//         let obj = {
//             name: movie.name,
//             genres: movie.genres,
//             image: movie.image,
//             premiered: movie.premiered
//         }

//         let result = await moviesBL.addMovie(obj)
//     })

// }

exports.getMoviesFromWS = function() {

    return new Promise(async(resolve, rejegt) => {

        let resp = await axios('https://api.tvmaze.com/shows');
        let moviesArr = resp.data;
        let movies = moviesArr.map(movie => {
            return {
                name: movie.name,
                genres: movie.genres,
                image: movie.image,
                premiered: movie.premiered
            }

        })


        if (movies.length == 0) {
            rejegt('Error')
            console.log('Error');
        } else {
            resolve(movies)
            console.log('result');
        }


    })
}