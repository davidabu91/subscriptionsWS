const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const moviesBL = require('./models/moviesBL')
const memberBL = require('./models/membersBL');

let cors = require('cors');

const membersController = require('./controllers/membersController');
const moviesController = require('./controllers/moviesController');
const subscriptionsController = require('./controllers/subscriptionsController');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());


require('./config/database');


// axios('https://jsonplaceholder.typicode.com/users').then(resp => {
//     resp.data.map(x => {
//         let obj = {
//             name: x.name,
//             email: x.email,
//             city: x.address.city
//         }
//         memberBL.addMember(obj)
//     })
// });

// axios('https://api.tvmaze.com/shows').then(resp => {
//     resp.data.map(x => {
//         let obj = {
//             name: x.name,
//             genres: x.genres,
//             image: x.image,
//             premiered: x.premiered
//         }
//         moviesBL.addMovie(obj)
//     })
// });

app.use('/api/members', membersController);
app.use('/api/movies', moviesController);
app.use('/api/subscriptions', subscriptionsController)

app.listen(process.env.PORT || 8000);
console.log('run server..');