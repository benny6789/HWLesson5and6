const mongoose = require("mongoose");

main().catch(err => console.log(err));


async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/sport');
    console.log("mongo connect vips local");
}