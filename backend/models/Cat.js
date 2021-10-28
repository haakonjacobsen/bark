import mongoose from "mongoose";

export const Cat = mongoose.model('Cat', { name: String });

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));