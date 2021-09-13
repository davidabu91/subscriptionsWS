const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/subscriptionsDB', { useNewUrlParser: true, useFindAndModify: false })

const mongoAtlasUserUri = "mongodb+srv://SUBSCRIPTIONS:SUBSCRIPTIONS3191@cluster0.xrkjw.mongodb.net/subscriptions?retryWrites=true&w=majority"

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUserUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}