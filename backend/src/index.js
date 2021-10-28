const { ApolloServer } = require('apollo-server');
import {typeDefs} from "../typeDefs";
import {resolvers} from "../resolvers";
import mongoose from "mongoose";
import {Cat} from "../models/Cat";

const startServer = async () => {
    try{
        const server = new ApolloServer({ typeDefs, resolvers });

        await mongoose.connect('mongodb+srv://stuff:things@cluster0.aut3e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });

        console.log(Cat.findById("616cc25c0383c985aa0c9e61"));
    } catch(e){
        console.log("Something went wrong. Error: " + e.toString());
    }
};

startServer()