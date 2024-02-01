const express = require("express");
const {VipsModel} = require("../models/vipModel")
const router = express.Router();

router.get("/",async(req,res) => {
    const data = await VipsModel.find({});
    res.json(data);
//   res.json({msg:"vips HW5 Works"})
})


module.exports = router;