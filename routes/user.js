const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("User test is successfully")
})

router.post('userposttest',(req,res)=>{
    const username = req.body.username
    res.send("username is :" + username)
})

module.exports = router;