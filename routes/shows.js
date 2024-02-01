const express = require("express");
const {ShowsModel, validateShow} = require("../models/showsModel")
const router = express.Router();

router.get("/",async(req,res) => {
    const data = await ShowsModel.find({});
    res.json(data);
//   res.json({msg:"index hw_Lesson5 Works"})
})

router.post("/",async(req,res) =>{
    const validBody = validateShow(req.body);
    if(validBody.error){
        return res.status(400).json(validBody.error.details);
    }

    try{
        const show = new ShowsModel(req.body);
        await show.save();
        res.json(show);
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
}
)
router.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const data = await ShowsModel.deleteOne({_id:id})
        res.json(data);
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
}
)






module.exports = router;