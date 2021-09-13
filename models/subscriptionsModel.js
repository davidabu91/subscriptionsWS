const mongoose = require('mongoose');

let schema = mongoose.Schema;


let SubscriptionSchema = new schema({
    MemberId: String,
    Movies: Array
})


module.exports = mongoose.model('subscriptions', SubscriptionSchema)