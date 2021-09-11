const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middleware
app.use(bodyParser.json())

//Import Routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');
app.use('/posts', postRoute);
app.use('/users', userRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// Connect to DB - aeduvzuwfpzuccxtuf@tbbyt.net
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('connected to DB')
);

// How do we start listeneing to the server
app.listen(3000);