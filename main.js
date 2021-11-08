const express = require('express');
const bodyParser = require('body-parser');




let cors = require('cors');

const membersController = require('./controllers/membersController');
const moviesController = require('./controllers/moviesController');
const subscriptionsController = require('./controllers/subscriptionsController');
const startConroller = require('./controllers/startConroller');

const app = express();

app.use(cors({
    origin: `*`,
    credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());


require('./config/database');


app.use('/api/members', membersController);
app.use('/api/movies', moviesController);
app.use('/api/subscriptions', subscriptionsController)
app.use('/api/start', startConroller)


app.listen(process.env.PORT || 8000);