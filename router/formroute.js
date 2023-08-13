const express = require("express");
const bcrypt = require("bcrypt");
const formmodel = require("../db/formschema");

const router = new express.Router();

router.get("/signup",(req,res)=>{
    res.render("index");
});

router.post("/signup",async (req,res)=>{

    const user = req.body.user;
    const email = req.body.email;
    const reqdata = {
        username:req.body.user,
        name:req.body.name,
        email:req.body.email,
        password:req.body.pass,
        cpassword:req.body.conpass,
        mnumber:req.body.mobile
    }

    try{
        const userdata = await formmodel.findOne({user:user});
        const emailid = await formmodel.findOne({email:email});
       
        if(userdata === null && emailid===null){
          
           const datasave = new formmodel(req.body);
           const token =  await datasave.genrateAuthToken();
           res.cookie("jwts",token,{
             expires:new Date(Date.now()+ 300000),
            httpOnly:true
           });
           
        //    await datasave.save(); 
            res.render("login");
            
        }else{
            if(userdata!=null){
            reqdata.usererror = "user allready registered";
            }
            if(emailid!=null){
                reqdata.emailerror = "email allready registered";
            }
            
            res.render("index",reqdata);
        }
    }
    catch(e){
           console.log(e);
           
    }
    
    // const docs = new formmodel(req.body);
    // const data = await docs.save();
  
    // res.send("submited");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",async(req,res)=>{
   
    const user = req.body.user;
    const password = req.body.pass;
   try{
    const data = await formmodel.findOne({user:user});
    const isMatch = await bcrypt.compare(password,data.pass);
    
  
   
     if(isMatch){
        const token = await data.genrateAuthToken();
        res.cookie("jwts",token,{
            expires:new Date(Date.now()+ 300000),
           httpOnly:true
       });
          res.render("admin");
     }
     else{
        res.render("login",{
            invalid:"Invalid Details",
        })
     }
    }catch(e){
        res.render("login",{
            invalid:"user not registered",
        })
    }

   
});

module.exports = router;