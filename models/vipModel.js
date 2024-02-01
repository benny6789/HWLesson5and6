const mongoose = require("mongoose");

const vipsSchema = new mongoose.Schema({
    name:String,
    birth_year:Number,
    country:String

}

)
exports.VipsModel = mongoose.model("vips",vipsSchema);