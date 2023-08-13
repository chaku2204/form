const jwt = require("jsonwebtoken");
const formmodel = require("../db/formschema");


const auth = async(req,res,next)=>{
    try{
         const token = req.cookies.jwts;
         const varifyuser = jwt.verify(token,process.env.SECRET_KEY);
         const user = await formmodel.findOne({_id:varifyuser._id});
         req.token = token;
         req.user = user;
         console.log(user);
         next();

    }catch(error){
        res.render("login");
    }
}

module.exports = auth;
