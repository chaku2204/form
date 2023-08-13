require('dotenv').config()
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const router = require("./router/formroute");
const cookieparser = require("cookie-parser");
const aut = require('./middlwear/auth');
require("./db/connection");
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,"/public");
const template_path = path.join(__dirname,"/template/views");
const partials_path = path.join(__dirname,"/template/partials");
const formmodel = require("./db/formschema");
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.use(express.static(static_path));
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieparser());
app.use(router);

app.get("/admin/user",(req,res)=>{
    res.render("user");
})

app.get("/admin",aut,(req,res)=>{
   
    res.render("admin");
})

app.get("/logout",aut,async (req,res)=>{
    res.clearCookie("jwts");
    req.user.tokens = req.user.tokens.filter((element)=>{
        return element.token != req.token;
    })
    await req.user.save();
    res.render("login");
})


app.get("/api/data",async(req,res)=>{
    const data = await formmodel.find({}).select({_id:0,__v:0});
    res.json(data);
})



 
app.listen(port,()=>{
    console.log("port no",port);
});