const mongoose = require('mongoose');

let schema = mongoose.Schema;


let MemberSchema = new schema({
    Name: String,
    Email: String,
    City: String
})


module.exports = mongoose.model('members', MemberSchema)