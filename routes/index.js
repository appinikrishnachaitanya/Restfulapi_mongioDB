const express = require('express');
const router = express.Router();
const useradd = require('../controller/userc');
router.get("/",(req,res)=> {
    
    res.send("Hello");


});


router.get("/contact" , useradd.getUsers );

router.post("/contact",useradd.userCreate)

router.get("/contact/:contactID",useradd.getContactWithID);

router.put("/contact/:contactID",useradd.updatebyid);

router.delete("/contact/:ContactID",useradd.deletebyid);



module.exports =router;