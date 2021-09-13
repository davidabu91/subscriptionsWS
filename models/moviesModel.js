const mongoose = require('mongoose');

let schema = mongoose.Schema;


let MovieSchema = new schema({
    Name: String,
    Genres: Array,
    Image: Object,
    Premiered: String
})


module.exports = mongoose.model('movies', MovieSchema)