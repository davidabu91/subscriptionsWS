const mongoose = require('mongoose');


const mongoAtlasUri = process.env.MONGO_URI || "mongodb://localhost:27017";

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
        () => console.log(" Mongoose is connected"),
    );
} catch (e) {
    console.log("could not connect");
}