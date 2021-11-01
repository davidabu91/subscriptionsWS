const express = require('express');
const axios = require('axios')
const moviesBL = require('../models/moviesBL')
const memberBL = require('../models/membersBL');




const router = express.Router();

router.route('/members')
    .post(async function() {
        let result = await axios('https://jsonplaceholder.typicode.com/users');

        result.data.map(x => {
            let obj = {
                name: x.name,
                email: x.email,
                city: x.address.city
            }
            memberBL.addMember(obj)
        })
        return resp.json(data)

    });



router.route('/movies')
    .post(async function() {
        let result = await axios('https://api.tvmaze.com/shows');

        result.data.map(x => {
            let obj = {
                name: x.name,
                genres: x.genres,
                image: x.image,
                premiered: x.premiered
            }
            moviesBL.addMovie(obj)
        })
        return resp.json(data)

    });








module.exports = router;