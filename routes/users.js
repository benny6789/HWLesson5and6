const express = require("express");
const router = express.Router();

// הגדרת ראוטר של הרואט שנגדיר באפ
router.get("/",(req,res) => {
  res.json({msg:"users HW5 work"})
})

// export default
module.exports = router;