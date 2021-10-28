import {Cat} from "./models/Cat";
import {Pist} from "./models/Pist";

export const resolvers = {
    Query: {
        hello: () => "Heisann",
        cats: () => Cat.find({}),
        pist: () => Pist.find({}),
        stuff: () => "Things"
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const cat = new Cat({name});
            await cat.save();
            console.log(cat);
            return cat;
        },
        createPist: async (_, {dogBreed, price}) => {
            const kitty = new Pist({
                dogBreed: dogBreed,
                price:price
            });
            await kitty.save();
            console.log(kitty);
            return kitty;
        }
    }
};