const express = require("express");
const {ApolloServer, gql} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');
const Post = require('./models/Post.model');

async function startServer() {
    try{
        const app = express()
        const apolloServer = new ApolloServer({
            typeDefs,
            resolvers
        });

        await apolloServer.start();

        apolloServer.applyMiddleware({app:app});

        app.use((req, res) => {
            res.send("Hello from express apollo server");
        });

        await mongoose.connect('mongodb+srv://stuff:things@cluster0.aut3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        
        console.log('Connected to MongoDB')

        app.listen(4000, () => console.log("Server is running on port 4000"));
    } catch(err){
        console.log(err)
    }
}

startServer()