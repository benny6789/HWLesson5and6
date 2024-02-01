const mongoose = require("mongoose");
const Joi = require("joi");

const showsSchema = new mongoose.Schema({
    name:String,
    genre:String,
    kind:String,
    views:Number,
    image:String,
    descrption:String


}

)
exports.ShowsModel = mongoose.model("shows",showsSchema);

exports.validateShow = (_reqbody) =>{
    const joiSchema = Joi.object({
        name:Joi.string().min(2).max(100).required(),
        genre:Joi.string().min(2).max(100).required(),
        kind:Joi.string().min(2).max(100).required(),
        views:Joi.number().min(1).max(999999).required(),
        image:Joi.string().min(2).max(300).required(),
        descrption:Joi.string().min(2).max(500).required(),


    }

    )
    return joiSchema.validate(_reqbody);
}