const express = require("express");
const router = express.Router();

router.get("/",async(req,res) => {
  res.json({msg:"index hw_Lesson5 Works"})
})


module.exports = router;