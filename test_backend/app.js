const Post = require("./models/Post");

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const PORT =  5000;

//Import Routes
const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');

//Middleware
app.use(bodyParser.json())
app.use('/posts', postRoute);
app.use('/users', userRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});


// Connect to DB - aeduvzuwfpzuccxtuf@tbbyt.net
mongoose.connect(process.env.DB_CONNECTION, () =>
    console.log('Connected to DB')
);

app.listen(PORT, () => console.log(`API available at localhost:${PORT}`));

console.log(Post.find().sort({'dogAge': 1}))