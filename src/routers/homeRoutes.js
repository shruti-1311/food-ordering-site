const { Router } = require("express");
const router = Router();

router.get("",async(req , res)=>{
    res.status(200).send({message:"Welcome to online food ordering website!"});
})

module.exports=router;